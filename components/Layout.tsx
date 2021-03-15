import { useUser } from '@auth0/nextjs-auth0'
import { Avatar, Flex, Image, Text, Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import useWindowSize from '../lib/useWindows'
import Nav from './Nav'

function ProfileAvatar() {
   const { user } = useUser()

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
            background: 'black',
            direction: 'rtl'
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
               zIndex: 1
            }}
         >
            <ProfileAvatar />
            <Logo />
         </Box>
         <Box
            as="main"
            sx={{
               flexGrow: 1,
               overflow: 'hidden auto',
               display: 'grid',
               width: '100%',
               justifyContent: 'center'
            }}
         >
            {children}
         </Box>
         <Box
            as="footer"
            sx={{
               backgroundColor: 'primary',
               width: '100%',
               zIndex: '200'
            }}
         >
            <Nav />
         </Box>
      </Box>
   )
}

export default Layout
