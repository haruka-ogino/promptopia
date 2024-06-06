import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  async session({ session }) {
    try {
    } catch (error) {}
  },
  async signIn({ profile }) {
    try {
    } catch (error) {}
  },
})

export { handler as GET, handler as POST }
