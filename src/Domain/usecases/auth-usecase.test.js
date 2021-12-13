const Error = require('../../utils/error')

class AuthUseCase {
  async auth (email, password) {
    if (!email) {
      throw new Error(500)
    }
  }
}

describe('Auth-usecase', () => {
  test('Shoul throw if no email is provided', async () => {
    const sut = new AuthUseCase()
    const promise = sut.auth()
    expect(promise).rejects.toThrow(new Error(200))
  })
})
