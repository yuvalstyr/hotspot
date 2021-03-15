import React from 'react'
import { Wrap, WrapItem } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

export function WorkoutsTrainees() {
   return (
      <Wrap>
         <WrapItem>
            <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
         </WrapItem>
         <WrapItem>
            <Avatar
               size="sm"
               name="Kola Tioluwani"
               src="https://bit.ly/tioluwani-kolawole"
            />
         </WrapItem>
         <WrapItem>
            <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
         </WrapItem>
         <WrapItem>
            <Avatar size="sm" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
         </WrapItem>
         <WrapItem>
            <Avatar
               size="sm"
               name="Prosper Otemuyiwa"
               src="https://bit.ly/prosper-baba"
            />
         </WrapItem>
         <WrapItem>
            <Avatar size="sm" name="Christian Nwamba" src="https://bit.ly/code-beast" />
         </WrapItem>
         <WrapItem>
            <Avatar size="sm" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
         </WrapItem>
      </Wrap>
   )
}
