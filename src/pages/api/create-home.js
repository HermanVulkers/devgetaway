import { getSession } from 'next-auth/react';
const { connectToDatabase } = require('../../../utils/mongo-client');
import { ObjectId } from 'mongodb';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  if (req.method === 'POST') {
    const userCollection = await connectToDatabase('users');
    const user = await userCollection.findOne({
      email: session.user.email,
    });

    if (!user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const homeCollection = await connectToDatabase('homes');

    const existingHome = await homeCollection.findOne({
      userId: user._id.toString(),
    });

    if (existingHome) {
      const { _id, ...updatedHomeData } = req.body;

      await homeCollection.updateOne(
        { userId: user._id.toString() },
        { $set: updatedHomeData }
      );
    } else {
      await homeCollection.insertOne({
        ...req.body,
        userId: user._id.toString(),
      });
    }
    res.status(200).json({ message: 'Home successfully saved.' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
