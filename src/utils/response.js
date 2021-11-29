module.exports = function (status, content) {
  return {
    statusCode: status,
    body: content
  }
}
