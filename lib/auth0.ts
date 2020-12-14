import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN ?? '',
  clientId: process.env.AUTH0_CLIENT_ID ?? '',
  clientSecret: process.env.AUTH0_SECRET,
  redirectUri:
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:3000/api/callback'
      : process.env.REDIRECT_URI,
  postLogoutRedirectUri:
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:3000/'
      : process.env.NEXTAUTH_URL,
  scope: 'openid profile email gender',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.COOKIE_SECRET ?? '',
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8,
    // (Optional) Store the id_token in the session. Defaults to false.
    storeIdToken: false,
    // (Optional) Store the access_token in the session. Defaults to false.
    storeAccessToken: false,
    // (Optional) Store the refresh_token in the session. Defaults to false.
    storeRefreshToken: false,
  },
})
