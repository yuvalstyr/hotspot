import React from 'react'
import { Flex, NavLink, jsx, IconButton } from 'theme-ui'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import { mdiCalendarPlus } from '@mdi/js'
import Icon from '@mdi/react'
import ReactTooltip from 'react-tooltip'

/** @jsx jsx */

const Nav: React.FC = () => {
  const router = useRouter()
  const isSSR = () => typeof window === 'undefined'
  React.useEffect(() => {
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
        <IconButton>
          <Icon path={mdiCalendarPlus} data-for="happyFace" />
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
