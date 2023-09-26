module.exports = {
  apps: [
    {
      name: 'vuatenmien.net',
      script: 'yarn start',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
