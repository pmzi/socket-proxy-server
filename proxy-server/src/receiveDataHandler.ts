import net, { Socket } from 'net';
import proxyServerAPI from './api/proxyServerAPI';

import createResponse from './utilities/createResponse';
import parseURLInfo from './utilities/parseURLInfo';

let lastTarget: string;
let lastPort: string;

export default function receiveDataHandler(socket: Socket) {
  return async (message: Buffer): Promise<void> => {
    const messageString = message.toString('ascii');
    const { queryString: { target, port } } = parseURLInfo(messageString);

    const currentTarget = target || lastTarget;
    const currentPort = port || lastPort;

    if (!currentTarget || !currentPort) {
      socket.write(createResponse(400, 'You have to specify both target and port!'));
      socket.end();
      return;
    }

    lastTarget = currentTarget;
    lastPort = currentPort;

    const normalizedPort = Number(currentPort);

    const isBlocked = await proxyServerAPI.checkRequest({ target, port: normalizedPort });
    if (isBlocked) {
      await proxyServerAPI.addRequest({
        target: currentTarget,
        port: normalizedPort,
        isBlocked: true,
      });

      socket.write(createResponse(400, 'Server is blocked!'));
      socket.end();
      return;
    }

    const serviceSocket = new net.Socket();
    serviceSocket.connect(normalizedPort, currentTarget, () => {
      serviceSocket.write(message);
    });

    serviceSocket.on('data', async (data) => {
      await proxyServerAPI.addRequest({
        target: currentTarget,
        port: normalizedPort,
        length: data.length,
        isBlocked: false,
      });

      socket.write(data);
    });
  };
}
