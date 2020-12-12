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
      Providers.Email({
        server: {
          host: process.env.SMTP_HOST ?? '',
          port: Number(process.env.SMTP_PORT) ?? '',
          auth: {
            user: process.env.SMTP_USER ?? '',
            pass: process.env.SMTP_PASSWORD ?? '',
          },
        },
        from: process.env.SMTP_FROM, // The "from" address that you want to use
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
