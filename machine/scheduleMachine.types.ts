import { Day, User } from '../generates/graphql'
import { WorkoutActorType } from './workoutMachine.types'

export enum scheduleStates {
   pending = 'pending',
   fetching = 'fetching',
   active = 'active',
   revalidating = 'revalidating',
   failed = 'failed'
}

export interface ScheduleStateSchema {
   states: {
      [scheduleStates.pending]: { [key: string]: unknown }
      [scheduleStates.fetching]: { [key: string]: unknown }
      [scheduleStates.active]: { [key: string]: unknown }
      [scheduleStates.failed]: { [key: string]: unknown }
      [scheduleStates.revalidating]: { [key: string]: unknown }
   }
}

export type ScheduleMachineEvent =
   | { type: 'CLOSE' }
   | { type: 'FETCH' }
   | { type: 'FAILED'; error: any }
   | { type: 'SUCCEEDED'; data: Day[] }
   | { type: 'REFETCH' }
   | { type: 'NEXT_WEEK' }

export interface workoutsActor {
   date: Date
   id: number
   ref: WorkoutActorType
}

export interface ScheduleMachineContext {
   schedule: Day[]
   user?: User
   error: any
   weekDelta: number
}
