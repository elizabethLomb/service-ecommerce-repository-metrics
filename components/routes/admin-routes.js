const helmet = require('helmet');
const bodyParser = require('body-parser');
const expressJSDocSwagger = require('express-jsdoc-swagger');

module.exports = () => {
	const start = async ({ manifest = {}, app, config }) => {
		const { swaggerOptions } = config;
		expressJSDocSwagger(app)(swaggerOptions);
		
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
		app.use(helmet());

		/**
		 * GET /__/manifest
		 * @summary This endpoint serves the manifest
		 * @tags Admin - Everything about admin routes
		 * @return {Manifest} 200 - Successful response
		 * @return {ErrorServerResponse} 500 - Server error
		 */
		app.get('/__/manifest', (req, res) => res.json(manifest));

		return Promise.resolve();
	};

	return { start };
};
