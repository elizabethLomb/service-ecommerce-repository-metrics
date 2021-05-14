const System = require('systemic')
const v1ApiController = require('./v1/api-controller')

module.exports = new System({ name: 'controller' })
	.add('controller.v1.api', v1ApiController())
	.dependsOn('logger')
