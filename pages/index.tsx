import { User } from '@prisma/client'
import { NextPage } from 'next'
import React from 'react'
import { Label } from 'theme-ui'
import Home from '../components/Home'
import SignUp from '../components/SignUp'
import auth0 from '../lib/auth0'
import prisma from '../lib/prisma'

interface sessionProps {
  user: User
  initailSessionStatus: string
}

const index: NextPage<sessionProps> = ({ user, initailSessionStatus }) => {
  //  todo add signup page - after login if the user is not in db
  const [sessionStatus, setSessionStatus] = React.useState(initailSessionStatus)
  if (sessionStatus === 'signup')
    return <SignUp user={user} handleSignup={setSessionStatus} />
  if (sessionStatus === 'signin') return <Label>Please login</Label>
  if (sessionStatus === 'logged')
    return (
      <React.Fragment>
        <Home user={user} />
      </React.Fragment>
    )
  return null
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
  const dbUser = await prisma.user.findUnique({
    where: { email },
  })
  const { name, email: dbEmail, gender, left } = dbUser
  return {
    props: {
      user: dbUser ? { name, dbEmail, gender, left } : null,
      initailSessionStatus: dbUser ? 'logged' : 'signup',
    },
  }
}

export default index
