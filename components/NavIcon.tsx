import React, { FC } from 'react'
import { IconContext } from 'react-icons/lib'

const NavIcon: FC = ({ children }) => {
  return (
    <IconContext.Provider value={{ size: '3em' }}>
      {children}
    </IconContext.Provider>
  )
}

export default NavIcon
