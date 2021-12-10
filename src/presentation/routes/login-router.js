const HttpError = require('../helpers/error')
const HttpResponse = require('../helpers/response')

module.exports = class LoginRouter {
  constructor (authUseCase, emailValidator) {
    this.authUseCase = authUseCase
    this.emailValidator = emailValidator
  }

  route (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        throw new HttpError(400, 'invalid: Email', 'badRequest')
      }
      if (!this.emailValidator.isValid(email)) {
        throw new HttpError(400, 'invalid: Email', 'badRequest')
      }
      if (!password) {
        throw new HttpError(400, 'invalid: Password', 'badRequest')
      }
      const accessToken = this.authUseCase.auth(email, password)
      if (!accessToken) {
        throw new HttpError(401, 'unauthorized', 'unauthorizedError')
      }
      return HttpResponse.success(200, accessToken)
    } catch (error) {
      console.error(error)
      return HttpResponse.error(error)
    }
  }
}
