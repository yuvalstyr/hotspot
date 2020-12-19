import React from 'react'
import { jsx, Image, Flex, Label, Avatar } from 'theme-ui'
import { useFetchUser } from '../lib/user'
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
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: ['100vh', '97vh'],
        minHeight: ['100vh', '97vh'],
        background: `linear-gradient(to bottom, rgb(13, 11, 10), rgb(20, 17, 15), rgb(26, 23, 21), 
                     rgb(33, 30, 26), rgb(39, 36, 32), rgb(46, 42, 37), 
                     rgb(52, 42, 38), rgb(59, 42, 38), rgb(65, 43, 39), 
                     rgb(71, 43, 39), rgb(78, 43, 40), rgb(84, 43, 40));`,
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
          alignContent: 'center',
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
