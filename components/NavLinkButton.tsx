import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { NavLink, jsx } from 'theme-ui'
import NavIcon from './NavIcon'
/** @jsx jsx */

export const NavLinkButton: FC<IButtonLinkProps> = ({ children, url }) => {
  const router = useRouter()

  return (
    <NavLink p={2} onClick={() => router.push(url)} sx={{ variant: 'links' }}>
      <NavIcon>{children}</NavIcon>
    </NavLink>
  )
}

export interface IButtonLinkProps {
  url: string
}
