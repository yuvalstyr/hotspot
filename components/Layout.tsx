import React from 'react'
import { jsx, Image, Flex, Label, Avatar } from 'theme-ui'
import { useFetchUser } from '../lib/user'
import useWindowSize from '../lib/useWindows'
import Nav from './Nav'

/** @jsx jsx */

function ProflieAvatar() {
  const { user } = useFetchUser()

  return (
    <Flex p={2} sx={{ alignItems: 'center' }}>
      {user && (
        <Avatar
          src={user?.picture}
          sx={{
            width: 72,
            height: 72,
            maxWidth: 72,
            minWidth: 72,
            borderRadius: 99999,
          }}
        />
      )}
      <Label p={2}>{}</Label>
    </Flex>
  )
}

function Logo() {
  return (
    <Flex p={2} sx={{ alignItems: 'center' }}>
      <Image
        src={'./favicon.png'}
        sx={{
          width: 72,
          height: 72,
          maxWidth: 72,
          minWidth: 72,
        }}
      />
    </Flex>
  )
}

const Layout: React.FC = ({ children }) => {
  const { height } = useWindowSize()
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: height,
        backgroundImage: `linear-gradient(to top, rgb(6, 7, 8), rgba(17, 6, 8, 0.91), rgba(27, 5, 8, 0.81), rgba(38, 3, 8, 0.72), rgba(48, 2, 8, 0.62), rgba(59, 1, 8, 0.53), rgba(75, 18, 8, 0.53), rgba(90, 35, 7, 0.52), rgba(106, 52, 7, 0.52), rgba(122, 68, 7, 0.52), rgba(137, 85, 6, 0.51), rgba(153, 102, 6, 0.51));`,
      }}
    >
      <header
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: 'secondary',
          padding: '0 20px',
          zIndex: 1,
        }}
      >
        <ProflieAvatar />
        <Logo />
      </header>
      <main
        sx={{
          display: 'grid',
          width: '100%',
          flex: '1 0 auto',
          justifyContent: 'center',
          // alignContent: 'center',
        }}
      >
        {children}
      </main>
      <footer
        sx={{
          backgroundColor: 'secondary',
          width: '100%',
          zIndex: '200',
        }}
      >
        <Nav />
      </footer>
    </div>
  )
}

export default Layout
