/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, {
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
    events: {
      createUser: async (message) => {
        console.log('message', message)
      },
      signIn: async (message) => {
        console.log('message', message)
      },
    },
    pages: {
      newUser: '/signup',
    },
    debug: process.env.NODE_ENV === 'development',
    adapter: Adapters.Prisma.Adapter({ prisma }),
    secret: process.env.SECRET,
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  })

// todo Signup page
