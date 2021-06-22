module.exports = {
  apps: [{
    script: 'dist/index.js',
    watch: 'dist',
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
