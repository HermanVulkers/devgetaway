import { getSession } from 'next-auth/react';
const { connectToDatabase } = require('../../../utils/mongo-client');

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const userCollection = await connectToDatabase('users');
  const user = await userCollection.findOne({
    email: session.user.email,
  });

  if (!user) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const homeCollection = await connectToDatabase('homes');

  const existingHome = await homeCollection.findOne({ userId: user._id });

  if (existingHome) {
    const photoCount = existingHome.photos.length;
    res.status(200).json({ count: photoCount });
  } else {
    res.status(200).json({ count: 0 });
  }
}
