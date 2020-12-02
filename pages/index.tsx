import { signin, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'theme-ui'
import Index from '../components/Index'

const index: React.FC = () => {
  const router = useRouter()
  const [session] = useSession()
  // fix returning url from facebook and google
  React.useEffect(() => {
    const { asPath } = router
    if (['/#_=_', '/#'].includes(asPath)) {
      router.push('/', undefined, { shallow: true })
    }
  }, [])
  function signout() {
    signOut()
  }
  return (
    <React.Fragment>
      {/* <Gallery /> */}
      {!session ? (
        <Button onClick={() => signin()}>Sign in</Button>
      ) : (
        <React.Fragment>
          {session.user.image && <img src={session.user.image} />}
          <Button onClick={signout}>Sign out</Button>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default index
