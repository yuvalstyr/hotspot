import React, { FC } from 'react'
import { IconContext } from 'react-icons/lib'
import { IconButton } from 'theme-ui'

const NavIcon: FC = ({ children }) => {
  return (
    <IconButton p={0} sx={{ display: 'flex' }}>
      <IconContext.Provider value={{ size: '4em' }}>
        {children}
      </IconContext.Provider>
    </IconButton>
  )
}

export default NavIcon
