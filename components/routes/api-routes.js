module.exports = () => {
	const start = async ({ app, controller, logger }) => {

			/**
     * GET /github/callback
     * @tags Auth gitHub
     * @summary This endpoint allow the user to access to the gitHub Api
     */
		app.get('/github/callback', (req, res, next) => {
			const requestToken = req.query.code
			controller.repository.OAuth(requestToken)
			.then(r => res.status(200).json({ message: 'Calling the controller apiAuth' }))
      .catch(next)
		})

		  /**
     * GET /repositories/:user
     * @tags Get All repositories
     * @summary This endpoint gets all the repositories from the user
		 * @param {string} user
     * @return {object} 200 - 'Calling the controller'
     * @return {ErrorServerResponse} 500 - Server error
     */
		app.get('/repositories/:user', (req, res, next) => {
			const { user } = req.params
			controller.repository.getRepositories(user)
			.then(r => res.status(200).json({ message: 'Calling the controller getRepositories' }))
      .catch(next)
		});

		return Promise.resolve();
	};

	return { start };
};
