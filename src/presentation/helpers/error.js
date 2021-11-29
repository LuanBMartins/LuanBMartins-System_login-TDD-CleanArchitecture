module.exports = class HttpError extends Error {
  constructor (status, message, description) {
    super()
    this.status = status
    this.message = message
    this.description = description
  }
}
