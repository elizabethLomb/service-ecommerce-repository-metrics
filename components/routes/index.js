const System = require('systemic');
const adminRoutes = require('./admin-routes');
const apiRoutes = require('./api-routes');

module.exports = new System({ name: 'routes' })
	.add('routes.admin', adminRoutes())
	.dependsOn('config', 'logger', 'app', 'middleware.prepper', 'manifest')
	.add('routes.api', apiRoutes())
	.dependsOn('logger', 'app', 'controller.repository')
	.add('routes')
	.dependsOn('routes.admin', 'routes.api');
