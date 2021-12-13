const Error = require('../../utils/error')

class AuthUseCase {
  async auth (email, password) {
    if (!email) {
      throw new Error(500)
    }
    if (!password) {
      throw new Error(500)
    }

    return null
  }
}

const makeSut = () => {
  const sut = new AuthUseCase()
  return {
    sut
  }
}

describe('Auth-usecase', () => {
  test('Should throw if no email is provided', async () => {
    // Invalid TESTE
    const { sut } = makeSut()
    const promise = sut.auth()
    expect(promise).rejects.toThrow(new Error(500, 'email', 'email'))
  })

  test('Should throw if no password is provided', async () => {
    // Invalid TESTE
    const { sut } = makeSut()
    const promise = sut.auth('any_email@mail.com')
    expect(promise).rejects.toThrow(new Error(500, 'password'))
  })
})
