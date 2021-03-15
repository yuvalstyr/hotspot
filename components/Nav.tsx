import React from 'react'
import { Flex } from '@chakra-ui/react'
import { BiCalendarPlus } from 'react-icons/bi'
import { MdFitnessCenter, MdPayment } from 'react-icons/md'
import { RiLoginBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { NavLinkButton } from './NavLinkButton'
import { Loading } from './Loading'
import { useUser } from '@auth0/nextjs-auth0'

const Nav: React.FC = () => {
   const { isLoading, user } = useUser()
   if (isLoading) return <Loading />
   return (
      <Flex as="nav" bg="primary" direction="row" justifyContent="space-around">
         <NavLinkButton text="אודות" buttonIcon={BiCalendarPlus} url={'/about'} />
         {user ? (
            <>
               <NavLinkButton text="תשלום" buttonIcon={MdPayment} url={'/payment'} />
               <NavLinkButton
                  text="אימונים"
                  buttonIcon={MdFitnessCenter}
                  url={'/schedule'}
               />
               <NavLinkButton
                  text="התנתק"
                  buttonIcon={RiLogoutBoxLine}
                  url={'/api/auth/logout'}
               />
            </>
         ) : (
            <NavLinkButton
               text="התחבר"
               buttonIcon={RiLoginBoxLine}
               url="/api/auth/login"
            />
         )}
      </Flex>
   )
}

export default Nav
