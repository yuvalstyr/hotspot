import * as React from 'react'
import { Claims } from '@auth0/nextjs-auth0/dist/session/session'
import { Text } from '@chakra-ui/react'
import request, { gql } from 'graphql-request'
import { NextPage, NextPageContext } from 'next'
import Home from '../components/Home'
import SignUp from '../components/SignUp'
import {
   getSession,
   handleProfile,
   useUser,
   Session,
   UserProfile
} from '@auth0/nextjs-auth0'
import { Query, User } from '../generates/graphql'
import { fetcher } from '../machine/useScheduleMachine'

const USER = gql`
   query user($email: String) {
      allUsers(where: { email: $email }) {
         id
         name
         email
         phone
         remainsClasses
      }
   }
`

function instanceOfDb(data: any): data is User {
   return 'phone' in data
}

enum Status {
   logged = 'logged',
   logout = 'logout',
   signout = 'signout'
}
interface sessionProps {
   user: UserProfile | User
   status: Status
}

const Index: NextPage<sessionProps> = ({ status }) => {
   const { user, error, isLoading } = useUser()
   // if (status === Status.logout) return <Text>בבקשה להתחבר</Text>
   // if (status === Status.logged) {
   //    if (instanceOfDb(user)) return <Home user={user}></Home>
   // }
   // if (status === Status.signout) return <SignUp user={user} />
   return <Text>Should not happens</Text>
}

function isUser(user: Claims): user is UserProfile {
   return (user as UserProfile).email !== undefined
}

// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(context: NextPageContext) {
   const { req, res } = context
   const session = req && res ? getSession(req, res) : ''

   if (!session) {
      return {
         props: {
            status: 'logout'
         }
      }
   }

   const email = isUser(session.user) ? session.user.email : ''
   const variables = email ? JSON.stringify({ email }) : null
   const data = (await fetcher(USER, variables ?? '')) as Query

   if (!data?.allUsers?.length) {
      return {
         props: {
            status: 'signout'
         }
      }
   }

   return {
      props: {
         // user: allUsers[0],
         status: 'logged'
      }
   }
}

export default Index
