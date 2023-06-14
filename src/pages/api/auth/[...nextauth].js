import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { upsertUser } from '../../../utils/upsert-user';
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const dbUser = await upsertUser(user.email, user.name, user.image);
      // Save the user id to the session object
      user.id = dbUser._id.toString();

      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.sub;

      return session;
    },
  },
};
export default NextAuth(authOptions);
