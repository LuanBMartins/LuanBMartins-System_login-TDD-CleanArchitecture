module.exports = class HttpError extends Error {
  constructor (status, message, description) {
    super(message)
    this.status = status
    this.description = description
  }
}
