import React from 'react'
import { HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

export function WorkoutButtons() {
   return (
      <HStack>
         <Button colorScheme="telegram">קבוצתי</Button>
         <Button colorScheme="telegram"> אישי</Button>
         <Button colorScheme="telegram">אליפטי</Button>
         <Button colorScheme="telegram"> הליכון</Button>
      </HStack>
   )
}
