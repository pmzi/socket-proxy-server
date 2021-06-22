module.exports = {
  apps : [{
    name: 'proxy back',
    script: "npm",
    args : "start",
    watch: 'dist',
    env: {
      DEBUG: 'server:server',
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }],
};
