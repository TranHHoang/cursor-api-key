import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { upsertUser } from "@/lib/db/users";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing environment variables for authentication");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email || !user.name) {
        return false;
      }

      try {
        const userData = {
          id: account?.providerAccountId || user.email,
          email: user.email,
          name: user.name,
          image: user.image || undefined,
        };
        console.log("Attempting to upsert user with data:", userData);

        const result = await upsertUser(userData);
        console.log("Upsert result:", result);

        return true;
      } catch (error) {
        console.error("Error storing user data:", error);
        return false;
      }
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
});

export { handler as GET, handler as POST };
