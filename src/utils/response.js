module.exports = class HttpResponse {
  static success (status, content) {
    return {
      statusCode: status,
      body: content
    }
  }

  static error (error) {
    return {
      statusCode: error.status,
      body: {
        message: error.message
      }
    }
  }
}
