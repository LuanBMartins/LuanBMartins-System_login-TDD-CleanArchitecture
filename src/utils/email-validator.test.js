const validator = require('validator')

class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}

describe('Email Validator', () => {
  test('Should return true if validator return true', () => {
    const sut = new EmailValidator()

    const response = sut.isValid('valid_email@meial.com')
    expect(response).toBe(true)
  })

  test('Should return false if validator return false', () => {
    validator.isEmailValid = false
    const sut = new EmailValidator()
    const response = sut.isValid('invalid_email@meial.com')
    expect(response).toBe(false)
  })
})
