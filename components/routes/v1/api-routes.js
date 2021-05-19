module.exports = () => {
	const start = async ({ app, logger, controller }) => {
		app.get('/v1/', (req, res, next) => {
			controller.v1.api.getHome(res)
				.then(r => r.status(200).json({ message: 'Getting home' }))
				.catch(next)
		})

		return Promise.resolve()
	}

	return { start }
}
