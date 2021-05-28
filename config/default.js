module.exports = {
	server: {
		host: '0.0.0.0',
		port: 4000,
	},
	routes: {
		admin: {
			swaggerOptions: {
				info: {
					description: 'Documentatio',
					title: 'service-ecommerce-repository-metrics',
					version: '1.0.0',
					contact: {
						name: 'team',
						email: '-'
					}
				},
				servers: [],
				security: {},
				baseDir: process.cwd(),
				swaggerUIPath: '/__/docs/api',
				filesPattern: './**/**-routes.js'
			}
		}
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
	gitHubApi: {
    url: process.env.SERVICE_GITHUB_API,
		oauthUrl: process.env.GITHUB_OAUTH,
		accessTokens: process.env.GITHUB_ACCESS_TOKEN
  },
};
