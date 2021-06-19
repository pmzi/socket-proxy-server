/**
 * Module dependencies.
 */

import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line import/first
import createDebug from 'debug';
// eslint-disable-next-line import/first
import http from 'http';
// eslint-disable-next-line import/first
import app from './app';

const debug = createDebug('server:server');

/**
   * Create HTTP server.
   */

const server = http.createServer(app);

/**
   * Normalize a port into a number, string, or false.
   */

function normalizePort(val: string) {
  const normalizedPort = parseInt(val, 10);

  if (Number.isNaN(normalizedPort)) {
    // named pipe
    return val;
  }

  if (normalizedPort >= 0) {
    // port number
    return normalizedPort;
  }

  return false;
}

/**
   * Event listener for HTTP server "error" event.
   */

function onError(error: any, port: string | number | false) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr?.port}`;
  debug(`Listening on ${bind}`);
}

/**
   * Get port from environment and store in Express.
 */

const normalizedPort = normalizePort(process.env.PORT || '3000');
app.set('port', normalizedPort);
/**
   * Listen on provided port, on all network interfaces.
 */

server.listen(normalizedPort);
server.on('error', (error) => onError(error, normalizedPort));
server.on('listening', onListening);
