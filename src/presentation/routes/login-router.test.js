const HttpError = require('../../utils/error')

class LoginRouter {
  route (httpRequest) {
    try {
      const { email } = httpRequest.body
      if (!email) {
        throw new HttpError(400, 'undefined email')
      }
    } catch (error) {
      return {
        statusCode: error.status,
        body: {
          message: error.message
        }
      }
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
    console.log(httpResponse)
    expect(httpResponse.statusCode).toBe(400)
  })
})
