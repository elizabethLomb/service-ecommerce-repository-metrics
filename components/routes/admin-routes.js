const expressSwaggerGenerator = require('express-swagger-generator');
const helmet = require('helmet');
const bodyParser = require('body-parser');

module.exports = () => {
	const start = async ({ manifest = {}, app, config }) => {
		const { swaggerOptions } = config;
		const expressSwagger = expressSwaggerGenerator(app);
		const options = {
			swaggerDefinition: {
				...swaggerOptions.swaggerDefinition,
			},
			basedir: __dirname,
			files: ['./**/**-routes.js'],
		};
		expressSwagger(options);

		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
		app.use(helmet());

		app.get('/__/manifest', (req, res) => res.json(manifest));

		return Promise.resolve();
	};

	return { start };
};
