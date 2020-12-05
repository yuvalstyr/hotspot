import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'
import { BiCalendarPlus } from 'react-icons/bi'
import { MdPayment, MdFitnessCenter } from 'react-icons/md'
import { RiLogoutBoxLine } from 'react-icons/ri'
import ReactTooltip from 'react-tooltip'
import { Flex, NavLink, jsx } from 'theme-ui'
import NavIcon from './NavIcon'

/** @jsx jsx */

const Nav: React.FC = () => {
  const router = useRouter()
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
      <NavLink
        p={2}
        onClick={() => {
          router.push('/schedule')
        }}
        sx={{ variant: 'links' }}
      >
        <NavIcon>
          <BiCalendarPlus />
        </NavIcon>
      </NavLink>
      <NavLink p={2} sx={{ variant: 'links' }}>
        <NavIcon>
          <MdPayment />
        </NavIcon>
      </NavLink>
      <NavLink p={2} onClick={() => signOut()} sx={{ variant: 'links' }}>
        <NavIcon>
          <RiLogoutBoxLine />
        </NavIcon>
      </NavLink>
    </Flex>
  )
}

export default Nav
