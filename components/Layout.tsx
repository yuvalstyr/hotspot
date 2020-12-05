import { useSession } from 'next-auth/client'
import React from 'react'
import { jsx, Image, Flex, Label, Avatar, Box } from 'theme-ui'
import Nav from './Nav'

/** @jsx jsx */

function Proflie() {
  const [seasion] = useSession()
  if (!seasion) return null
  return (
    <Flex>
      <Avatar
        src={seasion.user.image}
        sx={{
          width: 48,
          height: 48,
          maxWidth: 48,
          minWidth: 48,
          borderRadius: 99999,
        }}
      />
      <Label>{seasion.user.name}</Label>
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
      }}
    >
      <header
        sx={{
          gridArea: 'header',
          backgroundColor: 'secondary',
          padding: '0 20px',
          zIndex: 1,
        }}
      >
        dasd
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
