import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import Auth0Provider from "next-auth/providers/auth0"
import FacebookProvider from "next-auth/providers/facebook"
import InstagramProvider from "next-auth/providers/instagram"
import AppleProvider from "next-auth/providers/apple"

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
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
  callbacks: {

    async signin({ account, profile }) {
      console.log("yeeepp")
      if (account.provider === "google") {

        return profile.email_verified && profile.email.endsWith("@example.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
    async session( session, token ) {
      console.log('test')
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      session.oktaId = token.oktaId;
      return session;
    }

  },

}
export default NextAuth(authOptions)