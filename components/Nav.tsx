import React from 'react'
import { Flex, NavLink, jsx } from 'theme-ui'
import { useRouter } from 'next/router'

/** @jsx jsx */

const Nav: React.FC = () => {
  const router = useRouter()

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
        הזמנת אימון
      </NavLink>
      <NavLink p={2} sx={{ variant: 'links' }}>
        תשלומים
      </NavLink>
    </Flex>
  )
}

export default Nav
