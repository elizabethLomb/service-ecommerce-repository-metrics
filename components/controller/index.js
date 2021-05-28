const System = require('systemic')
const repositoryController = require('./repository-controller')

module.exports = new System({ name: 'controller' })
.add('controller.repository', repositoryController())
.dependsOn('logger', 'gitHubApi')