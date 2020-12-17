import { useRouter } from 'next/router'
import React from 'react'
import auth0 from '../lib/auth0'
import Gallery from '../components/Gallery'
import prisma from '../lib/prisma'
import { User } from '@prisma/client'
import { Label } from 'theme-ui'
import SignUp from '../components/SignUp'

interface sessionProps {
  user: User
  initailSessionStatus: string
}

const index: React.FC<sessionProps> = ({ user, initailSessionStatus }) => {
  //  todo add signup page - after login if the user is not in db
  const [sessionStatus, setSessionStatus] = React.useState(initailSessionStatus)
  if (sessionStatus === 'signup')
    return <SignUp user={user} handleSignup={setSessionStatus} />
  if (sessionStatus === 'signin') return <Label>Please login</Label>
  if (sessionStatus === 'logged') return <Label>` Hello ${user.name}`</Label>
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(context: any) {
  const session = await auth0.getSession(context.req)
  if (!session) {
    return {
      props: {
        user: null,
        sessionStatus: 'signin',
      },
    }
  }
  const { email } = session.user
  const dbUser = await prisma.user.findUnique({ where: { email } })

  return {
    props: {
      user: session?.user || null,
      initailSessionStatus: dbUser ? 'logged' : 'signup',
    },
  }
}

export default index
