import request from 'graphql-request'
import { assign, Machine, spawn } from 'xstate'
import { WORKOUTS } from '../lib/gql'
import {
  ScheduleMachineContext,
  ScheduleMachineEvent,
  scheduleStates,
  ScheduleStateSchema,
} from './scheduleMachine.types'
import { createWorkoutMachine } from './workoutMachine'
import { IWorkout } from './workoutMachine.types'

export const getWorkouts = (): Promise<any> => {
  return request(process.env.API_URL, WORKOUTS).then((res) => {
    if (res.errors) {
      throw res.errors
    } else {
      return res.data
    }
  })
}
export const scheduleMachine = Machine<
  ScheduleMachineContext,
  ScheduleStateSchema,
  ScheduleMachineEvent
>({
  id: 'schedule',
  context: {
    workouts: [],
    paidWorkout: 10,
    user: {
      id: 5,
      email: 'bla@bla.com',
      name: 'אלי',
      createdAt: new Date(),
      left: 10,
      updatedAt: new Date(),
      phone: '0543012103',
      gender: 'male',
    },
  },
  initial: scheduleStates.loading,
  states: {
    [scheduleStates.loading]: {
      invoke: {
        src: getWorkouts,
        onDone: {
          target: scheduleStates.active,
          actions: assign({
            workouts: (context, event) => {
              const { user } = context
              return event.data.workoutsPerWeek.map((workout: IWorkout) => {
                const { id, date, trainees, type } = workout
                return {
                  id,
                  date,
                  ref: spawn(
                    createWorkoutMachine({ id, date, trainees, type, user }),
                  ),
                }
              })
            },
          }),
        },
        onError: {
          target: 'failure',
        },
      },
    },
    [scheduleStates.active]: {},
    [scheduleStates.failure]: {},
  },
})
