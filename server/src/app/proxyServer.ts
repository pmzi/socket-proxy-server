import net from 'net';

const PROXY_PORT = 8080;

export default {
  start(port = PROXY_PORT) {
    const proxy = net.createServer((socket) => {
      socket.on('data', (message) => {
        console.log('---PROXY- got message', message.toString());

        const serviceSocket = new net.Socket();

        serviceSocket.connect(80, 'https://pmzi.dev', () => {
          console.log('---PROXY- Sending message to server');
          serviceSocket.write(message);
        });

        serviceSocket.on('data', (data) => {
          console.log('---PROXY- Receiving message from server', data.toString());
          socket.write(data);
        });
      });
    });

    proxy.listen(port);
  },
};
