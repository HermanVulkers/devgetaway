import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { upsertUser } from '../../../../utils/upsert-user';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user }, account, profile) {
      await upsertUser(user.email, user.name, user.image);
      return true;
    },
  },
};
export default NextAuth(authOptions);
