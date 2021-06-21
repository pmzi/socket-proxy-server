import net, { Socket } from 'net';
import proxyServerAPI from './api/proxyServerAPI';

import createResponse from './utilities/createResponse';
import parseURLInfo from './utilities/parseURLInfo';

export default function receiveDataHandler(socket: Socket) {
  return async (message: Buffer): Promise<void> => {
    const messageString = message.toString();
    const { queryString: { target, port } } = parseURLInfo(messageString);

    if (!port || !target) {
      socket.write(createResponse(400, 'You have to specify both target and port!'));
      socket.end();
      return;
    }

    const normalizedPort = Number(port);

    const isBlocked = await proxyServerAPI.checkRequest({ target, port: normalizedPort });
    if (isBlocked) {
      await proxyServerAPI.addRequest({
        target,
        port: normalizedPort,
        isBlocked: true,
      });

      socket.write(createResponse(400, 'Server is blocked!'));
      socket.end();
      return;
    }

    const serviceSocket = new net.Socket();
    serviceSocket.connect(normalizedPort, target, () => {
      serviceSocket.write(message);
    });

    serviceSocket.on('data', async (data) => {
      await proxyServerAPI.addRequest({
        target,
        port: normalizedPort,
        length: data.length,
        isBlocked: false,
      });

      socket.write(data);
    });
  };
}
