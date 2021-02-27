/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from '@prisma/client'
import { assign, DoneInvokeEvent, Machine } from 'xstate'
import { BOOK_WORKOUT, UNBOOK_WORKOUT } from '../lib/gql'

import {
  ICreateWorkout,
  WorkoutMachineContext,
  WorkoutMachineEvent,
  workoutsStates,
  WorkoutStateSchema,
} from './workoutMachine.types'

// export const bookWorkout: (
//   userId: number,
//   workoutId: number,
// ) => Promise<User> = (userId, workoutId) => {
//   return client
//     .mutate({
//       mutation: BOOK_WORKOUT,
//       variables: { traineeId: userId, workoutId },
//     })
//     .then((res) => {
//       if (res.errors) {
//         throw res.errors
//       } else {
//         return res.data.bookWorkout
//       }
//     })
// }

// export const unbookWorkout = (
//   context: WorkoutMachineContext,
//   event: { [key: string]: any },
// ): any => {
//   const { workoutId } = event
//   const { user } = context
//   return client
//     .mutate({
//       mutation: UNBOOK_WORKOUT,
//       variables: { traineeId: user.id, workoutId },
//     })
//     .then((res) => {
//       if (res.errors) {
//         throw res.errors
//       } else {
//         return res.data
//       }
//     })
// }

export const createWorkoutMachine = ({
  id,
  date,
  trainees,
  type: workoutType,
  user,
}: ICreateWorkout): any => {
  return Machine<
    WorkoutMachineContext,
    WorkoutStateSchema,
    WorkoutMachineEvent
  >({
    id: 'bookingMachine',
    initial: workoutsStates.active,
    context: {
      id,
      date,
      trainees,
      workoutType,
      user,
    },
    states: {
      active: {
        on: {
          BOOK: workoutsStates.booking,
          DELETE: workoutsStates.unbooking,
        },
      },
      [workoutsStates.booking]: {
        invoke: {
          id: 'bookWorkout',
          src: (context, event) => {
            if (event.type === 'BOOK') {
              return bookWorkout(context.user.id, event.workoutId)
              return null
            }
            // return bookWorkout(context.user.id, 100000)
            return null
          },
          onDone: {
            target: 'active',
            actions: assign<WorkoutMachineContext, DoneInvokeEvent<User>>({
              trainees: (
                context: WorkoutMachineContext,
                event: DoneInvokeEvent<User>,
              ) => trainees.concat(event.data),
            }),
            // Todo add to actions array sendToParent event that will update paid workouts
          },
          onError: {
            target: 'failure',
            actions: assign({
              error: (_, event) => {
                return event.data.message
              },
            }),
          },
        },
      },
      [workoutsStates.unbooking]: {
        invoke: {
          src: (context, event: WorkoutMachineEvent) => null,

          // unbookWorkout(context, event),
          onDone: {
            target: 'active',
            actions: [
              // Todo add to actions array sendToParent event that will update paid workouts
              assign({
                trainees: (context, event) => {
                  const {
                    data: { deleteBookedWorkout: user },
                  } = event

                  return trainees.filter(
                    (trainee: any) => trainee.id !== user.id,
                  )
                },
              }),
            ],
          },
          onError: {
            target: 'failure',
            actions: assign({
              error: (_, event) => {
                return event.data.message
              },
            }),
          },
        },
      },
      failure: {
        on: {
          CLOSE: 'active',
        },
      },
    },
  })
}
