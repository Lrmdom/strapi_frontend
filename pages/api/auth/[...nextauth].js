import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import Auth0Provider from "next-auth/providers/auth0"
import FacebookProvider from "next-auth/providers/facebook"
import InstagramProvider from "next-auth/providers/instagram"
import AppleProvider from "next-auth/providers/apple"
export const authOptions = {
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
      //issuer: process.env.ISSUER, optional
      //authorization: { params: { scope: "openid your_custom_scope" } },
    })
    // Sign in with passwordless email link
  ],
}

export default NextAuth(authOptions)