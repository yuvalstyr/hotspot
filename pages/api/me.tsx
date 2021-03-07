import { NextApiRequest, NextApiResponse } from 'next'
import auth0 from '../../lib/auth0'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function me(req: NextApiRequest, res: NextApiResponse) {
  try {
    await auth0.handleProfile(req, res, {})
  } catch (error) {
    console.error('auth0', error)
    res.status(error.status || 500).end(error.message)
  }
}
