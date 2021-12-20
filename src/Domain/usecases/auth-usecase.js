const Error = require('../../utils/error')

module.exports = class AuthUseCase {
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

    if (!user) {
      return null
    }

    return null
  }
}
