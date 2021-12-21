const Error = require('../../utils/error')

module.exports = class AuthUseCase {
  constructor ({ loadUserByEmailRepository, encrypter, tokenGenerator }) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypter = encrypter
    this.tokenGenerator = tokenGenerator
  }

  async auth (email, password) {
    if (!email) {
      throw new Error(500)
    }
    if (!password) {
      throw new Error(500)
    }
    const user = await this.loadUserByEmailRepository.load(email)
    const isValid = user && await this.encrypter.compare(password, user.password)

    if (isValid) {
      return this.tokenGenerator.generate(user.id)
    }
    return null
  }
}
