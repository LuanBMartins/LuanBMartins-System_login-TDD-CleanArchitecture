const HttpError = require('../../utils/error')
const HttpResponse = require('../../utils/response')

class LoginRouter {
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
    } catch (error) {
      return HttpResponse.error(error)
    }
  }
}

describe('login router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.message).toEqual('invalid: Email')
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'any'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.message).toEqual('invalid: Password')
  })

  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })
})
