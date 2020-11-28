import React from 'react'
import Gallery from './Gallery'
import { signIn, signOut, useSession } from 'next-auth/client'

const Index: React.FC = () => {
  const [session, loading] = useSession()
  if (loading) return <div>Loading..</div>
  function signin() {
    signIn()
  }
  function signout() {
    signOut()
  }
  React.useEffect(() => {
    console.log('session', session)
  }, [session])
  return (
    <React.Fragment>
      {/* <Gallery /> */}
      {!session ? (
        <button onClick={signin}>Sign in</button>
      ) : (
        <button onClick={signout}>Sign out</button>
      )}
    </React.Fragment>
  )
}

export default Index
