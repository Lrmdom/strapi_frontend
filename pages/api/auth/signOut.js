import { getProviders, signOut, useSession } from "next-auth/react"

export default function SignOut({ providers }) {

    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }


