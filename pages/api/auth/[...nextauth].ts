import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
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
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options)
