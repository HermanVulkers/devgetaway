import { getSession } from 'next-auth/react';
const { connectToDatabase } = require('../../utils/mongo-client');
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
    const dbUser = await userCollection.findOne({
      email: session.user.email,
    });

    if (!dbUser) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const homeCollection = await connectToDatabase('homes');

    const existingHome = await homeCollection.findOne({
      userId: dbUser._id.toString(),
    });

    if (!existingHome) {
      res.status(404).json({ message: 'Home not found. Create a home first.' });
      return;
    }

    const { startDate, endDate } = req.body;

    await homeCollection.updateOne(
      { userId: dbUser._id.toString() },
      {
        $set: { startDate, endDate },
      }
    );

    res.status(200).json({ message: 'Home date range updated successfully.' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
