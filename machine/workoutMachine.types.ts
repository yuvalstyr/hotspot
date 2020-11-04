import { User, Workout } from '@prisma/client'
import { Actor, State } from 'xstate'

export enum workoutsStates {
  active = 'active',
  booking = 'booking',
  unbooking = 'unbooking',
  failure = 'failure',
}
export enum workoutsEvents {
  BOOK = 'BOOK',
  DELETE = 'DELETE',
  CLOSE = 'CLOSE',
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
  | { type: workoutsEvents.BOOK; workoutId: number }
  | { type: workoutsEvents.DELETE; workoutId: number }
  | { type: workoutsEvents.CLOSE }

export interface WorkoutMachineContext {
  id: number
  date: Date
  trainees?: User[]
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

export interface IWorkout extends Workout {
  trainees: User[]
  ref?: WorkoutActorType
}

export type WorkoutActorType = Actor<
  State<WorkoutMachineContext>,
  WorkoutMachineEvent
>
