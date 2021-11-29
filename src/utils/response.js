module.exports = function (status, content) {
  return {
    statusCode: status || 500,
    body: content || 'unexpected error!'
  }
}
