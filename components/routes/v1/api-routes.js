module.exports = () => {
	const start = async ({ app, logger, controller }) => {
		app.get('/', (req, res, next) => {
			controller.v1.api.getHome(res)
				.then(r => res.status(200).json({ message: 'Getting home' }))
				.catch(next)
		})

		return Promise.resolve()
	}

	return { start }
}
