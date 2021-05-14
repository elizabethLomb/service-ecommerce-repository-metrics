const util = require('util')

function InputError(message, extra) {
	Error.captureStackTrace(this, this.constructor)
	this.name = this.constructor.name
	this.message = message
	this.extra = extra
}

function NotFoundError(message, extra) {
	Error.captureStackTrace(this, this.constructor)
	this.name = this.constructor.name
	this.message = message
	this.extra = extra
}

function UnauthorizedError(message, extra) {
	Error.captureStackTrace(this, this.constructor)
	this.name = this.constructor.name
	this.message = message
	this.extra = extra
}

util.inherits(InputError, Error)
util.inherits(NotFoundError, Error)
util.inherits(UnauthorizedError, Error)

module.exports = {
	InputError,
	NotFoundError,
	UnauthorizedError,
}
