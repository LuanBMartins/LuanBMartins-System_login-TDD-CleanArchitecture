const validator = require('validator')
const EmailValidator = require('./email-validator')

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return true if validator return true', () => {
    const sut = makeSut()

    const response = sut.isValid('valid_email@meial.com')
    expect(response).toBe(true)
  })

  test('Should return false if validator return false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const response = sut.isValid('invalid_email@meial.com')
    expect(response).toBe(false)
  })
})
