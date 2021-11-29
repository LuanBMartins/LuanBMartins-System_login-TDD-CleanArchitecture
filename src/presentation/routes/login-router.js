const HttpError = require('../helpers/error')
const HttpResponse = require('../helpers/response')

module.exports = class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }

  route (httpRequest) {
    try {
      if (!httpRequest) {
        throw new HttpError(500, 'Unexpected Error!', 'Internal Server Error')
      }
      const { email, password } = httpRequest.body
      if (!email) {
        throw new HttpError(400, 'invalid: Email', 'badRequest')
      }
      if (!password) {
        throw new HttpError(400, 'invalid: Password', 'badRequest')
      }
      this.authUseCase.auth(email, password)
      return HttpResponse.success(401)
    } catch (error) {
      return HttpResponse.error(error)
    }
  }
}
