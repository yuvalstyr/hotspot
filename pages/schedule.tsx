import { Button, IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/layout'
import { Collapse } from '@chakra-ui/transition'
import { inspect } from '@xstate/inspect'
import { format } from 'date-fns'
import heLocale from 'date-fns/locale/he'
import { NextPage } from 'next'
import getConfig from 'next/config'
import * as React from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { DayBox } from '../components/DayBox'
import { Loading } from '../components/Loading'
import { WorkoutButtons } from '../components/WorkoutButtons'
import { WorkoutsTrainees } from '../components/WorkoutsTrainees'
import { Day } from '../generates/graphql'
import { useScheduleMachine } from '../machine/useScheduleMachine'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { publicRuntimeConfig } = getConfig()

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
if (typeof window !== 'undefined' && publicRuntimeConfig.NODE_ENV === 'development') {
   inspect({
      iframe: false
   })
}

export function getDayName(day: string): string {
   return day.replace('יום ', '')
}

function WorkoutCard() {
   const { isOpen, onToggle } = useDisclosure()
   return (
      <>
         <Divider />
         <Box w="95%">
            <HStack mb={2}>
               <Text color="white" flex={1}>
                  18:00
               </Text>
               <Button size="sm" onClick={onToggle}>
                  מי בא?
               </Button>
               <Button size="sm" bg="hover">
                  הזמן
               </Button>
            </HStack>
            <Collapse in={isOpen} animateOpacity>
               <HStack>
                  <WorkoutsTrainees />
               </HStack>
            </Collapse>
         </Box>
      </>
   )
}

function DayNav({ days, getNextWeek }: { days: Day[]; getNextWeek: () => void }) {
   const date = days[0]?.date ? new Date(days[0].date) : new Date()
   const shortDate = format(new Date(date ?? ''), 'MMM, dd EEEE', { locale: heLocale })
   return (
      <Box bg="card" borderRadius="15px" h="fit-content" w="95vw" m={2}>
         <HStack>
            <Text color="white" flex={1}>
               {shortDate}
            </Text>
            <IconButton
               colorScheme="whiteAlpha"
               aria-label="Previous Week"
               size="md"
               icon={<GrNext />}
            />
            <IconButton
               colorScheme="whiteAlpha"
               aria-label="Next Week"
               size="md"
               icon={<GrPrevious />}
               onClick={() => getNextWeek()}
            />
         </HStack>
         {days.length ? (
            <HStack m={3} justify="space-around">
               <DayBox date={days[0].date} selected />
               <DayBox date={days[0].date} />
               <DayBox date={days[0].date} />
               <DayBox date={days[0].date} />
               <DayBox date={days[0].date} />
            </HStack>
         ) : null}
      </Box>
   )
}

const SchedulePage: NextPage = () => {
   const { state, send } = useScheduleMachine()
   if (state.value === 'fetching' || state.value === 'pending') return <Loading />
   // const days = data.allDays as Day[]

   return (
      <VStack>
         <DayNav days={state.context.schedule} getNextWeek={() => send('NEXT_WEEK')} />
         {state.context.schedule.length ? (
            <React.Fragment>
               <WorkoutButtons />
               <WorkoutCard />
               <WorkoutCard />
               <WorkoutCard />
            </React.Fragment>
         ) : (
            <Text color="white">אין עדיין אימונים לשבוע הזה</Text>
         )}
      </VStack>
   )
}

export default SchedulePage
