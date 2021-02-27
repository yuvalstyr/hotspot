import { Avatar, Flex, Image, Text, Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { useFetchUser } from '../lib/user'
import useWindowSize from '../lib/useWindows'
import Nav from './Nav'

function ProflieAvatar() {
  const { user } = useFetchUser()

  return (
    <Flex p={2} sx={{ alignItems: 'center' }}>
      {user && <Avatar src={user?.picture} size="lg" />}
      <Text p={2}>{}</Text>
    </Flex>
  )
}

function Logo() {
  return (
    <Flex p={2} sx={{ alignItems: 'center' }}>
      <Image boxSize="75px" src={'./favicon.png'} />
    </Flex>
  )
}

const Layout: React.FC = ({ children }) => {
  const { height } = useWindowSize()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: height,
        backgroundImage: `linear-gradient(to top, rgb(6, 7, 8), rgba(17, 6, 8, 0.91), rgba(27, 5, 8, 0.81), rgba(38, 3, 8, 0.72), rgba(48, 2, 8, 0.62), rgba(59, 1, 8, 0.53), rgba(75, 18, 8, 0.53), rgba(90, 35, 7, 0.52), rgba(106, 52, 7, 0.52), rgba(122, 68, 7, 0.52), rgba(137, 85, 6, 0.51), rgba(153, 102, 6, 0.51));`,
        direction: 'rtl',
      }}
    >
      <Head>
        <title>My page title</title>
      </Head>
      <Box
        as="header"
        sx={{
          flexShrink: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'primary',
          padding: '0 20px',
          zIndex: 1,
        }}
      >
        <ProflieAvatar />
        <Logo />
      </Box>
      <Box
        as="main"
        sx={{
          flexGrow: 1,
          overflow: 'hidden auto',
          display: 'grid',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
      <Box
        as="footer"
        sx={{
          backgroundColor: 'primary',
          width: '100%',
          zIndex: '200',
        }}
      >
        <Nav />
      </Box>
    </Box>
  )
}

export default Layout
