module.exports = () => {
	const start = async ({ logger }) => {
		const getHome = async res => {
			try {
				logger.info(`Retrieve products by urls ${res}`)
				return {}
			} catch (error) {
				logger.error(`Could not generate sitemap: ${error.message}`)
				throw error
			}
		}

		return {
			getHome,
		}
	}

	return { start }
}
