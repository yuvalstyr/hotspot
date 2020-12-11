import { useSession } from 'next-auth/client'
import React from 'react'
import { jsx, Image, Flex, Label, Avatar, Box } from 'theme-ui'
import Nav from './Nav'

/** @jsx jsx */

function Proflie() {
  const [seasion] = useSession()
  if (!seasion) return null
  const imagePath = seasion.user.image ?? ''
  return (
    <Flex p={2} sx={{ alignItems: 'center' }}>
      <Avatar
        src={imagePath}
        sx={{
          width: 48,
          height: 48,
          maxWidth: 48,
          minWidth: 48,
          borderRadius: 99999,
        }}
      />
      <Label p={2}>{seasion.user.name}</Label>
    </Flex>
  )
}

function Logo() {
  return (
    <Flex p={2} sx={{ alignItems: 'center' }}>
      <Image
        src={'./favicon.png'}
        sx={{
          width: 48,
          height: 48,
          maxWidth: 48,
          minWidth: 48,
        }}
      />
    </Flex>
  )
}

const Layout: React.FC = ({ children }) => {
  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateAreas: ` "header header"
                             "main main"
                             "buttom buttom"`,
        gap: '5px',
        height: '100vh',
        // backgroundImage: 'linear-gradient(black 50%, #F42B03 , #FFD045)',
        background: `linear-gradient(to bottom, rgb(13, 11, 10), rgb(20, 17, 15), rgb(26, 23, 21), 
                     rgb(33, 30, 26), rgb(39, 36, 32), rgb(46, 42, 37), 
                     rgb(52, 42, 38), rgb(59, 42, 38), rgb(65, 43, 39), 
                     rgb(71, 43, 39), rgb(78, 43, 40), rgb(84, 43, 40));`,
      }}
    >
      <header
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gridArea: 'header',
          backgroundColor: 'secondary',
          padding: '0 20px',
          zIndex: 1,
        }}
      >
        <Proflie />
        <Logo />
      </header>
      <main
        sx={{
          gridArea: 'main',
          minWidth: 320,
          height: '80vh',
        }}
      >
        {children}
      </main>
      <footer
        sx={{
          flexBasis: 'sidebar',
          backgroundColor: 'secondary',
          gridArea: 'buttom',
          zIndex: '200',
        }}
      >
        <Nav />
      </footer>
    </div>
  )
}

export default Layout
