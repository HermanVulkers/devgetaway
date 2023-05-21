const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function connectToDatabase(collectionName) {
  await client.connect();
  const collection = client.db('devgetaway').collection(collectionName);
  return collection;
}

module.exports = {
  connectToDatabase,
};
