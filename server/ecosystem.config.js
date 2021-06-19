module.exports = {
  apps : [{
    name: 'proxy back',
    script: './dist/index.js',
    watch: 'dist',
    env: {
      DEBUG: 'server:server',
      NODE_ENV: 'development'
    }
  }],
};
