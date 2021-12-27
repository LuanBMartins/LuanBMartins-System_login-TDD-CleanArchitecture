const sut = require('./mongo-helper')

describe('Mongo Helper', () => {
  beforeAll(async () => {
    jest.setTimeout(10)
    await sut.connect('mongodb://localhost:27017/user')
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect when getCollection() is invoked and client is disconnected', async () => {
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    await sut.getCollection('users')
    expect(sut.db).toBeTruthy()
  })
})
