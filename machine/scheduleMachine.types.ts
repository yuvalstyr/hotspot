import { User, Workout } from '@prisma/client'

export enum scheduleStates {
  loading = 'loading',
  active = 'active',
  failure = 'failure',
}

export interface ScheduleStateSchema {
  states: {
    [scheduleStates.active]: { [key: string]: unknown }
    [scheduleStates.loading]: { [key: string]: unknown }
    [scheduleStates.failure]: { [key: string]: unknown }
  }
}

export type ScheduleMachineEvent = { type: 'CLOSE' }

export interface ScheduleMachineContext {
  workouts: (Workout[] & { trainees: User[] }) | null
  paidWorkout: number
  user: User
}
