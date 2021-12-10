class EmailValidator {
  isValid (email) {
    return true
  }
}

describe('Email Validator', () => {
  test('Should return true if validator return true', () => {
    const sut = new EmailValidator()
    const response = sut.isValid('valid_email@meial.com')
    expect(response).toBe(true)
  })
})
