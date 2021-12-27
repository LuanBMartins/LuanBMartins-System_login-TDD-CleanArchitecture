const { MongoClient } = require('mongodb')

const test = {
  async connect (uri) {
    this.uri = uri
    const database = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    this.client = await database.connect()
    console.log('TESTEE', this.client)
    this.db = this.client.db()
  },

  async disconnect () {
    await this.client.close()
    this.client = null
    this.db = null
  },

  async getCollection (name) {
    if (!this.client || !this.client.isConnected()) {
      await this.connect(this.uri)
    }
    return this.db.collection(name)
  }
}

async function main () {
  const resp = await test.connect('mongodb://localhost:27017/user')
  return resp
}
main().then(res => console.log(res))
