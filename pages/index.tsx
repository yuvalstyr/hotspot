import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'
import Gallery from '../components/Gallery'

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
  //  todo add signup page - after login if the user is not in db
  return (
    <React.Fragment>
      <Gallery />
    </React.Fragment>
  )
}

export default index
