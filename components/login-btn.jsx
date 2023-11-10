import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
  const { data: session,status } = useSession()
console.log(session)
  if (status === "authenticated")  {

    return (
      <>
        Signed in as {session.user} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}