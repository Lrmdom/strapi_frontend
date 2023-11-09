import { getProviders, signIn, signOut, useSession } from "next-auth/react"

export default function SignIn({ providers }) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut({ callbackUrl: '/contacto' })}>Sign out</button>
      </>
    )
  }

}
