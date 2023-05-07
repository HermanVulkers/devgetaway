const { connectToDatabase } = require('./mongo-client');

export async function upsertUser(email, name, image) {
  const collection = await connectToDatabase('users');

  await collection.updateOne(
    { email },
    {
      $setOnInsert: {
        email,
        name,
        image,
        createdAt: new Date(),
      },
      $set: {
        updatedAt: new Date(),
      },
    },
    { upsert: true }
  );
}
