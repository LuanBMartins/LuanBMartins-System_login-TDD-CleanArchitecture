const Error = require('../../utils/error')

class AuthUseCase {
  constructor ({ loadUserByEmailRepository }) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
  }

  async auth (email, password) {
    if (!email) {
      throw new Error(500)
    }
    if (!password) {
      throw new Error(500)
    }

    const user = await this.loadUserByEmailRepository.load(email)
    console.log(user)

    return null
  }
}

const makeSut = () => {
  const loadUserByEmailRepositorySpy = makeLoadUserByEmailRepository()
  const sut = new AuthUseCase({ loadUserByEmailRepository: loadUserByEmailRepositorySpy })
  return {
    loadUserByEmailRepositorySpy,
    sut
  }
}

const makeLoadUserByEmailRepository = () => {
  class LoadUserByEmailRepositorySpy {
    async load (email) {
      this.email = email
      return this.user
    }
  }
  const loadUserByEmailRepositorySpy = new LoadUserByEmailRepositorySpy()
  loadUserByEmailRepositorySpy.user = {
    id: 'any_id',
    password: 'hashed_password'
  }
  return loadUserByEmailRepositorySpy
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

  test('Should call LoadUserByEmailRepository with correct email', async () => {
    const { sut, loadUserByEmailRepositorySpy } = makeSut()
    await sut.auth('any_email@mail.com', 'any_password')
    expect(loadUserByEmailRepositorySpy.email).toBe('any_email@mail.com')
  })
})
