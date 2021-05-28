const System = require('systemic')
const GitHubApi = require('./gitHubApi')

module.exports = new System({ name: 'gitHubApi' })
  .add('gitHubApi', GitHubApi())
  .dependsOn('config', 'logger')