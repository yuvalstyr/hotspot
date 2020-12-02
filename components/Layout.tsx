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
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <header
        sx={{
          width: '100%',
        }}
      >
        <Flex
          sx={{
            justifyContent: 'space-between',
            backgroundColor: 'secondary',
          }}
        >
          <Proflie />
          <Nav />
          <Image src="/logo.jpg" variant="logo" />
        </Flex>
      </header>
      <main
        sx={{
          width: '100%',
          paddingTop: '10px',
          display: 'grid',
          justifyContent: 'center',
        }}
      >
        {children}
      </main>
      <footer
        sx={{
          width: '100%',
        }}
      />
    </div>
  )
}

export default Layout
