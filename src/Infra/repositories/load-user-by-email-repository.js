const Error = require('../../utils/error')
const MongoHelper = require('../helpers/mongo-helper')

module.exports = class LoadUserByEmailRepository {
  async load (email) {
    if (!email) {
      throw new Error(500)
    }
    const userModel = await MongoHelper.getCollection('users')
    const user = await userModel.findOne({
      email
    }, {
      projection: {
        password: 1
      }
    })
    return user
  }
}
