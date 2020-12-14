import React, { FC } from 'react'
import { NavLink, jsx } from 'theme-ui'
import NavIcon from './NavIcon'
import { NavLinkButton } from './NavLinkButton'

/** @jsx jsx */

export interface IButtonSignProps {
  url: string
}
export const NavSignButton: FC<IButtonSignProps> = ({ children, url }) => {
  return (
    <NavLinkButton sx={{ variant: 'links' }} url={url}>
      <NavIcon>{children}</NavIcon>
    </NavLinkButton>
  )
}
