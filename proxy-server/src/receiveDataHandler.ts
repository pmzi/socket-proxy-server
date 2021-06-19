import net, { Socket } from 'net';

import createResponse from './utilities/createResponse';
import parseURLInfo from './utilities/parseURLInfo';

export default function receiveDataHandler(socket: Socket) {
  return (message: Buffer): void => {
    const messageString = message.toString();
    const { queryString: { target, port } } = parseURLInfo(messageString);

    if (!port || !target) {
      socket.write(createResponse(400, 'You have to specify both target and port!'));
      socket.end();
      return;
    }

    const serviceSocket = new net.Socket();
    serviceSocket.connect(Number(port), target, () => {
      serviceSocket.write(message);
    });

    serviceSocket.on('data', (data) => {
      socket.write(data);
    });
  };
}
