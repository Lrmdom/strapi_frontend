import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import Auth0Provider from "next-auth/providers/auth0"
import FacebookProvider from "next-auth/providers/facebook"
import InstagramProvider from "next-auth/providers/instagram"
import AppleProvider from "next-auth/providers/apple"
export const authOptions = {
  session:{
    strategy:"jwt"
  },
  pages: {
    //signIn: '/api/auth/signin',  //why this doenst work?
    //signOut: '/api/auth/signout',
    //error: '/api/auth/error', // Error code passed in query string as ?error=
    //verifyRequest: '/api//auth/verify-request', // (used for check email message)
    //newUser: '/api//auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {

    async signIn({ user, account, profile, email, credentials }) {
      return user
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },

    async jwt({ token, account, user }) {

      if (account) {

        token.accessToken = user.email
        token.id = user.id
      }
      return token
    },
    async session({ session, token, user }) {

      session.user = token
      //session.user is undefined
      console.log(session.user)
      return session
    },

  },

  // Configure one or more authentication providers
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
      //authorization: { params: { scope: "openid your_custom_scope" } },
    })
    // Sign in with passwordless email link
  ],
}

export default NextAuth(authOptions)