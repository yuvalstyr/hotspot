import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { NavLink, jsx, Flex } from 'theme-ui'
import NavIcon from './Icon'
/** @jsx jsx */

export const NavLinkButton: FC<IButtonLinkProps> = ({ children, url }) => {
  const router = useRouter()

  return (
    <NavLink p={1} onClick={() => router.push(url)} sx={{ variant: 'links' }}>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <NavIcon size={2} sx={{ width: '100%' }}>
          {children}
        </NavIcon>
      </Flex>
    </NavLink>
  )
}

export interface IButtonLinkProps {
  url: string
}
