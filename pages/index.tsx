import { useRouter } from 'next/router'
import React from 'react'
aimport auth0 from '../lib/auth0'
import Gallery from '../components/Gallery'

const index: React.FC = () => {
  //  todo add signup page - after login if the user is not in db
  return (
    <React.Fragment>
      <Gallery />
    </React.Fragment>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(context: any) {
  const session = await auth0.getSession(context.req)
  if (session?.user) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { email } = session
  }
  return {
    props: {
      user: session?.user || null,
    },
  }
}

export default index
