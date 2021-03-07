import { ISession } from '@auth0/nextjs-auth0/dist/session/session'
import { Text } from '@chakra-ui/react'
import request, { gql } from 'graphql-request'
import { NextPage } from 'next'
import React from 'react'
import useSWR from 'swr'
import Home from '../components/Home'
import { Loading } from '../components/Loading'
import SignUp from '../components/SignUp'
import auth0 from '../lib/auth0'

const USER = gql`
  query user($email: String) {
    allUsers(where: { email: $email }) {
      id
      name
      email
      phone
    }
  }
`

const fetcher = (query: string, variables: string) => {
  return request('http://localhost:5000/api/graphql', query, variables)
}

interface sessionProps {
  user: ISession['user']
}

const index: NextPage<sessionProps> = ({ user }) => {
  //  todo add signup page - after login if the user is not in db

  if (!user) return <Text>בבקשה להתחבר</Text>
  if (!user.email) return null

  const variables = JSON.stringify({ email: user.email })

  const { data, error } = useSWR(user.email ? [USER, variables] : null, fetcher)
  if (error) return <Text>{error}</Text>
  const loading = !data
  if (loading) return <Loading />
  const { allUsers } = data
  if (allUsers.length) {
    return <Home user={user} />
  }

  return <SignUp user={user} />
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(context: any) {
  const session = await auth0.getSession(context.req)

  if (!session) {
    return {
      props: {
        user: null,
      },
    }
  }

  return {
    props: {
      user: session.user,
    },
  }
}

export default index
