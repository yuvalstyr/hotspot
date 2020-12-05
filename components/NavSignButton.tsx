import React, { FC } from 'react'
import { NavLink, jsx } from 'theme-ui'
import NavIcon from './NavIcon'

/** @jsx jsx */

export interface IButtonSignProps {
  action: () => void
}
export const NavSignButton: FC<IButtonSignProps> = ({ children, action }) => {
  return (
    <NavLink p={2} onClick={() => action()} sx={{ variant: 'links' }}>
      <NavIcon>{children}</NavIcon>
    </NavLink>
  )
}
