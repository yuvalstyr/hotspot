import { User } from '@prisma/client'
import { IWorkout, WorkoutActorType } from './workoutMachine.types'

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

export interface workoutsActor {
  date: Date
  id: number
  ref: WorkoutActorType
}

export interface ScheduleMachineContext {
  workouts: IWorkout[]
  paidWorkout: number
  user: User
}
