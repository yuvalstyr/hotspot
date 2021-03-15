import React from 'react'
import { useMachine } from '@xstate/react'
import { format, min } from 'date-fns'
import { IWorkout } from '../machine/workoutMachine.types'
import { Slider } from './Slider'
import { Workout } from './Workout'
import { scheduleMachine } from '../machine/scheduleMachine'

function getMinDate(workouts: IWorkout[]) {
   const minDate = workouts?.reduce(
      (result, current) => min([new Date(current.isoDateTime), result]),
      new Date(workouts[0]?.isoDateTime)
   )

   return minDate ? format(minDate, 'MM/dd/yy') : ''
}

const Schedule: React.FC = () => {
   const [current] = useMachine(scheduleMachine, { devTools: true })
   const { workouts } = current.context

   const [activeDate, setActiveDate] = React.useState('')

   React.useEffect(() => {
      if (workouts) {
         workouts.length ? setActiveDate(getMinDate(workouts)) : ''
      }
   }, [workouts])

   const datesSet = new Set(
      workouts?.map((workout) => format(new Date(workout.isoDateTime), 'MM/dd/yy'))
   )

   if (current.matches('loading')) return <div>Loading...</div>

   return (
      <React.Fragment>
         <pre>{JSON.stringify(current.toStrings().join(' '), null, 2)}</pre>
         <Slider
            datesSet={datesSet}
            activeDate={activeDate}
            setActiveDate={setActiveDate}
         />
         {workouts
            .filter((workout) => {
               return format(new Date(workout.isoDateTime), 'MM/dd/yy') === activeDate
            })
            .map((workout) => {
               if (workout.ref) {
                  return <Workout key={workout.id} workoutRef={workout.ref} />
               }
            })}
      </React.Fragment>
   )
}

export default Schedule
