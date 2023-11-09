import { getProviders, signOut, useSession } from "next-auth/react"

export default function SignOut({ providers }) {

    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }


