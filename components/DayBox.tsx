import React from 'react'
import { Box, Text, VStack } from '@chakra-ui/layout'
import { format } from 'date-fns'
import heLocale from 'date-fns/locale/he'
import { getDayName } from '../pages/schedule'
import { Day } from '../generates/graphql'

export type DayBoxProps = {
   date: Day['date']
   selected?: boolean
}

export function DayBox({ date, selected }: DayBoxProps) {
   if (!date) return null
   const day = format(new Date(date), 'EEEEE', { locale: heLocale })
   const shortDate = format(new Date(date), 'dd')
   const boxColor = selected ? 'purple.500' : 'whiteAlpha.300'
   return (
      <Box bg={boxColor} borderRadius="md" color="white" w="50%">
         <VStack>
            {/* <Text fontSize="lg">{shortDate}</Text> */}
            <Text fontSize="lg">{getDayName(day)}</Text>
         </VStack>
      </Box>
   )
}
