import React from 'react'
import { Flex } from '@chakra-ui/react'
import { BiCalendarPlus } from 'react-icons/bi'
import { MdFitnessCenter, MdPayment } from 'react-icons/md'
import { RiLoginBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { useFetchUser } from '../lib/user'
import { NavLinkButton } from './NavLinkButton'

const Nav: React.FC = () => {
  const { loading, user } = useFetchUser()

  return (
    <Flex as="nav" bg="primary" direction="row" justifyContent="space-around">
      <NavLinkButton buttonIcon={BiCalendarPlus} url={'/about'} />
      <NavLinkButton buttonIcon={MdPayment} url={'/schedule'} />
      <NavLinkButton buttonIcon={MdFitnessCenter} url={'/schedule'} />
      {user ? (
        <NavLinkButton buttonIcon={RiLogoutBoxLine} url={'/schedule'} />
      ) : (
        <NavLinkButton buttonIcon={RiLoginBoxLine} url={'/schedule'} />
      )}
    </Flex>
  )
}

export default Nav
