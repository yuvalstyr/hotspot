import * as React from 'react'
import { useMachine } from '@xstate/react'
import useSWR from 'swr'
import { Machine, assign } from 'xstate'
import {
   ScheduleMachineContext,
   ScheduleMachineEvent,
   scheduleStates,
   ScheduleStateSchema
} from './scheduleMachine.types'
import request, { gql } from 'graphql-request'

export const SCHEDULE = gql`
   query Days($weeksDelta: Int) {
      weeklySchedule(weeksDelta: $weeksDelta) {
         id
         date
         status
         workouts {
            type
            maxParticipated
            hour
         }
      }
   }
`

export const scheduleMachine = Machine<
   ScheduleMachineContext,
   ScheduleStateSchema,
   ScheduleMachineEvent
>({
   id: 'schedule',
   context: {
      schedule: [],
      error: '',
      weekDelta: 0
   },
   initial: scheduleStates.pending,
   states: {
      [scheduleStates.pending]: {
         on: {
            FETCH: { target: scheduleStates.fetching }
         }
      },
      [scheduleStates.fetching]: {
         on: {
            SUCCEEDED: {
               target: scheduleStates.active,
               actions: assign({
                  schedule: (_, event) => event.data
               })
            },
            FAILED: {
               target: scheduleStates.failed,
               actions: assign({
                  error: (_, event) => event.error
               })
            }
         }
      },
      [scheduleStates.active]: {
         on: {
            FETCH: 'revalidating',
            REFETCH: { actions: ['revalidate'] },
            NEXT_WEEK: {
               actions: [
                  assign({
                     weekDelta: (context, event) => context.weekDelta + 1
                  })
               ]
            }
         }
      },
      [scheduleStates.revalidating]: {
         on: {
            SUCCEEDED: {
               target: scheduleStates.active,
               actions: assign({
                  schedule: (_, event) => event.data
               })
            },
            FAILED: {
               target: scheduleStates.failed,
               actions: assign({
                  error: (_, event) => event.error
               })
            }
         }
      },
      [scheduleStates.failed]: {
         on: {
            FETCH: { target: scheduleStates.revalidating },
            REFETCH: { actions: ['revalidate'] }
         }
      }
   }
})

export const fetcher = (query: string, variables: string) => {
   return request('http://localhost:5000/api/graphql', query, variables)
}

export const useScheduleMachine = () => {
   const [state, send, service] = useMachine(scheduleMachine, {
      devTools: true
   })
   const variables = JSON.stringify({ weeksDelta: state.context.weekDelta })
   const { data, error, isValidating, revalidate } = useSWR(
      [SCHEDULE, variables],
      fetcher
   )
   scheduleMachine.withConfig({ actions: { revalidate } })
   React.useEffect(() => {
      send('FETCH')
   }, [send])

   React.useEffect(() => {
      if (isValidating) {
         send('FETCH')
      } else if (error) {
         send('FAILED', { error })
      } else if (data) {
         send('SUCCEEDED', { data: data.weeklySchedule })
      }
   }, [isValidating, send, error, data])

   return { state, send }
}
