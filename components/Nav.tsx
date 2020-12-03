import React from 'react'
import { Flex, NavLink, jsx, IconButton } from 'theme-ui'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import Icon from '@mdi/react'
import ReactTooltip from 'react-tooltip'
import { BiCalendarPlus } from 'react-icons/bi'

/** @jsx jsx */

const Nav: React.FC = () => {
  const router = useRouter()
  const isSSR = () => typeof window === 'undefined'
  React.useEffect(() => {
    console.log('build')
    ReactTooltip.rebuild()
  }, [isSSR])
  return (
    <Flex as="nav" sx={{ backgroundColor: 'secondary' }}>
      <NavLink p={2} sx={{ variant: 'links' }}>
        אימונים
      </NavLink>
      <NavLink
        p={2}
        onClick={() => {
          router.push('/schedule')
        }}
        sx={{ variant: 'links' }}
      >
        <IconButton data-tip="hello world" data-for="happyFace">
          <BiCalendarPlus />
        </IconButton>
        {!isSSR && <ReactTooltip id="happyFace">בלה ובל</ReactTooltip>}
      </NavLink>
      <NavLink p={2} sx={{ variant: 'links' }}>
        תשלומים
      </NavLink>
      <NavLink p={2} onClick={() => signOut()} sx={{ variant: 'links' }}>
        צא
      </NavLink>
    </Flex>
  )
}

export default Nav
