module.exports = {
	server: {
		host: '0.0.0.0',
		port: process.env.SERVICE_PORT,
	},
	routes: {
		admin: {
			swaggerValidator: {
				apiDocEndpoint: '/__/docs/api',
				validateRequests: true,
				validateResponses: true,
				validationEndpoint: '/test',
				format: 'yaml',
				yaml: {
					file: './docs/syncapi.yaml',
				},
			},
		},
	},
	logger: {
		transport: 'console',
		include: [
			'tracer',
			'timestamp',
			'level',
			'message',
			'error.message',
			'error.code',
			'error.stack',
			'request.url',
			'request.headers',
			'request.params',
			'request.method',
			'response.statusCode',
			'response.headers',
			'response.time',
			'process',
			'system',
			'package.name',
			'service',
		],
		exclude: ['password', 'secret', 'token', 'request.headers.cookie', 'dependencies', 'devDependencies'],
	},
	// controller: {
	// 	v1: {
	// 		repository: {}
	// 	}
	// },
	// githubApi: {
	// 	v1: {
	// 		url: `${process.env.GITHUB_API}/users/${process.env.OWNER}`
	// 	}
	// }
};
