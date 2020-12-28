import React from 'react'
import { MdFitnessCenter, MdPayment } from 'react-icons/md'
import { BiCalendarPlus } from 'react-icons/bi'
import { RiLogoutBoxLine, RiLoginBoxLine } from 'react-icons/ri'
import { Flex, NavLink, jsx, Label } from 'theme-ui'
import NavIcon from './Icon'
import { NavLinkButton } from './NavLinkButton'
import { useFetchUser } from '../lib/user'

/** @jsx jsx */

const Nav: React.FC = () => {
  const isSSR = () => typeof window === 'undefined'
  const { loading, user } = useFetchUser()

  return (
    <Flex
      as="nav"
      sx={{
        backgroundColor: 'primary',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <NavLinkButton url={'/schedule'}>
        <BiCalendarPlus />
        <Label>הזמנת אימון</Label>
      </NavLinkButton>
      <NavLinkButton url={'/schedule'}>
        <MdPayment />
        <Label>תשלום</Label>
      </NavLinkButton>
      <NavLinkButton url={'/schedule'}>
        <MdFitnessCenter />
        <Label>היסטוריה</Label>
      </NavLinkButton>
      {user ? (
        <NavLinkButton url={'api/logout'}>
          <RiLogoutBoxLine />
          <Label>התנתק</Label>
        </NavLinkButton>
      ) : (
        <NavLinkButton url={'api/login'}>
          <RiLoginBoxLine />
          <Label>התחבר</Label>
        </NavLinkButton>
      )}
    </Flex>
  )
}

export default Nav
