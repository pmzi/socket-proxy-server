import net from 'net';
import receiveDataHandler from './receiveDataHandler';

const PROXY_PORT = 8080;

export default {
  start(proxyPort = PROXY_PORT): void {
    const proxy = net.createServer((socket) => {
      socket.setEncoding('utf8');

      const handleReceiveData = receiveDataHandler(socket);
      socket.on('data', handleReceiveData);
    });

    proxy.listen(proxyPort);
  },
};
