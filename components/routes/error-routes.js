const {
	StatusCodes,
} = require('http-status-codes')
const { InputError } = require('../../lib/errors')

module.exports = () => {
	const start = async ({ app, logger }) => {
		const tagError = err => {
			const errors = {
				InputError: StatusCodes.BAD_REQUEST,
				NotFoundError: StatusCodes.NOT_FOUND,
				UnauthorizedError: StatusCodes.UNAUTHORIZED,
			}

			return errors[err.name] || err.statusCode || 500
		}

		const formatJoiBadRequestError = joiError => {
			const joiErrorValue = joiError.output.payload
			return new InputError(joiErrorValue.message)
		}

		app.use((originalError, req, res, next) => {
			const err = originalError.isBoom ? formatJoiBadRequestError(originalError) : originalError
			err.statusCode = tagError(err)
			logger.error(`${err.statusCode} - ${req.path} - ${err.message}`)
			res.status(err.statusCode)
				.json({ type: err.name, message: err.message, extra: err.extra })
		})

		return Promise.resolve()
	}

	return {
		start,
	}
}
