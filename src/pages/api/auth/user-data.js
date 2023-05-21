import { getSession } from 'next-auth/react';
const { connectToDatabase } = require('../../../utils/mongo-client');

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const collection = await connectToDatabase('users');
  const userData = await collection.findOne({ email: session.user.email });

  if (!userData) {
    res.status(404).json({ message: 'User data not found' });
    return;
  }

  res.status(200).json(userData);
}
