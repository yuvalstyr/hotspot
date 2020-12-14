import { useRouter } from 'next/router'
import React from 'react'
import auth0 from '../lib/auth0'
import Gallery from '../components/Gallery'
import { prisma } from '../graphql/context'
import { User } from '@prisma/client'
import { Label } from 'theme-ui'

interface sessionProps {
  user: User
  sessionStatus: string
}

const index: React.FC<sessionProps> = ({ user, sessionStatus }) => {
  console.log(user, sessionStatus)
  //  todo add signup page - after login if the user is not in db
  if (sessionStatus === 'signup') return <Label>Signup</Label>
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
      sessionStatus: dbUser ? 'logged' : 'signup',
    },
  }
}

export default index
