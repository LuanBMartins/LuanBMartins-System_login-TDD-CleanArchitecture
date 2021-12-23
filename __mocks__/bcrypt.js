module.exports = {
  isValid: true,
  async compare (value, hashedValue) {
    this.value = value
    this.hash = hashedValue
    return this.isValid
  }
}
