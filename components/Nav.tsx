import { signIn, signOut, useSession } from 'next-auth/client'
import React from 'react'
import { MdFitnessCenter, MdPayment } from 'react-icons/md'
import { BiCalendarPlus } from 'react-icons/bi'
import { RiLogoutBoxLine, RiLoginBoxLine } from 'react-icons/ri'
import ReactTooltip from 'react-tooltip'
import { Flex, NavLink, jsx } from 'theme-ui'
import NavIcon from './NavIcon'
import { NavSignButton } from './NavSignButton'
import { NavLinkButton } from './NavLinkButton'

const Nav: React.FC = () => {
  const [session] = useSession()
  const isSSR = () => typeof window === 'undefined'
  React.useEffect(() => {
    console.log('build')
    ReactTooltip.rebuild()
  }, [isSSR])
  return (
    <Flex
      as="nav"
      sx={{
        backgroundColor: 'secondary',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <NavLink p={2} sx={{ variant: 'links' }}>
        <NavIcon>
          <MdFitnessCenter />
        </NavIcon>
      </NavLink>
      <NavLinkButton url={'/schedule'}>
        <BiCalendarPlus />
      </NavLinkButton>
      <NavLink p={2} sx={{ variant: 'links' }}>
        <NavIcon>
          <MdPayment />
        </NavIcon>
      </NavLink>
      {session ? (
        <NavSignButton action={signOut}>
          <RiLogoutBoxLine />
        </NavSignButton>
      ) : (
        <NavSignButton action={signIn}>
          <RiLoginBoxLine />
        </NavSignButton>
      )}
    </Flex>
  )
}

export default Nav
