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

    // Prepare photos array with ObjectId
    const photoUrlsWithIds = req.body.s3PhotoUrls.map((url) => ({
      _id: new ObjectId(),
      url: url,
    }));

    if (existingHome) {
      // remove mongo _id from req.body
      const { _id, s3PhotoUrls, ...updatedHomeData } = req.body;

      await homeCollection.updateOne(
        { userId: dbUser._id.toString() },
        {
          $set: updatedHomeData,
          $addToSet: { s3PhotoUrls: { $each: photoUrlsWithIds } },
        }
      );
    } else {
      await homeCollection.insertOne({
        ...req.body,
        userId: dbUser._id.toString(),
        s3PhotoUrls: photoUrlsWithIds,
      });
    }
    res.status(200).json({ message: 'Home successfully saved.' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
