import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import Auth0Provider from "next-auth/providers/auth0"
import FacebookProvider from "next-auth/providers/facebook"
import InstagramProvider from "next-auth/providers/instagram"
import AppleProvider from "next-auth/providers/apple"

export const authOptions = {

  callbacks: {

    async signIn({ user, account, profile, email, credentials }) {
      console.log(user)
      alert("leo1")
      return user
    },
    async redirect({ url, baseUrl }) {
      alert("leo2")
      console.log(baseUrl)
      return baseUrl
    },

    async jwt({ token, account, user }) {
      alert("leo3")
      console.log(token)
      console.log(account)
      console.log(user)
      if (user || account) {
        let new_token = {}
        new_token.access_token = account.access_token
        new_token.user = { id: user.id, email: user.email, name: user.name }
        console.log(new_token)
        return new_token
      }

      console.log(token)
      return token
    },
    async session({ session, token, user }) {
      alert("leo4")
      console.log(token)
      console.log(user)
      console.log(session)
      session.access_token = token.access_token
      session.user = token.user
      console.log(session)
      return session
    },

  },
  session: {
    strategy: "jwt",
  },
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    InstagramProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Auth0Provider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      issuer: process.env.ISSUER,
    }),
  ],
}

export default NextAuth(authOptions)