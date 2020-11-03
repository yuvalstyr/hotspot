import { User } from '@prisma/client'

export enum workoutsStates {
  active = 'active',
  booking = 'booking',
  unbooking = 'unbooking',
  failure = 'failure',
}

export interface WorkoutStateSchema {
  states: {
    [workoutsStates.active]: { [key: string]: unknown }
    [workoutsStates.booking]: { [key: string]: unknown }
    [workoutsStates.unbooking]: { [key: string]: unknown }
    [workoutsStates.failure]: { [key: string]: unknown }
  }
}

export type WorkoutMachineEvent =
  | { type: 'BOOK'; workoutId: number }
  | { type: 'DELETE'; workoutId: number }
  | { type: 'CLOSE' }

export interface WorkoutMachineContext {
  id: number
  date: Date
  trainees?: any
  workoutType: string
  user: User
  error?: any
}

export interface ICreateWorkout {
  id: number
  date: Date
  trainees: User[]
  type: string
  user: User
}
