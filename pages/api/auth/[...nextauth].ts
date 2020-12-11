/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const options = {
  session: {
    // use JWTs instead
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    jwt(tokenPayload, user, account, profile, isNewUser) {
      console.log('isNewUser', isNewUser)
      console.log('account', account)
      console.log('user', user)
      console.log('profile', profile)
    },
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
    Providers.Facebook({
      clientId: process.env.NEXTAUTH_FACEBOOK_ID ?? '',
      clientSecret: process.env.NEXTAUTH_FACEBOOK_SECRET ?? '',
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options)
