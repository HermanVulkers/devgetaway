import { getSession } from 'next-auth/react';
const { connectToDatabase } = require('../../utils/mongo-client');

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
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

  const homesCollection = await connectToDatabase('homes');
  const home = await homesCollection.findOne({ userId: user._id.toString() });

  console.log('home', home);

  if (!home) {
    res.status(404).json({ message: 'Home not found' });
    return;
  }

  res.status(200).json(home);
}
