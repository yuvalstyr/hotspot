/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { Workout as IWorkout } from '@prisma/client'
import { useMachine } from '@xstate/react'
import { format, min } from 'date-fns'
import React from 'react'
import { scheduleMachine } from '../machine/scheduleMachine'
import { Slider } from './Slider'
import { Workout } from './Workout'

const getMinDate = (workouts: IWorkout[]) => {
  const minDate = workouts?.reduce(
    (result, current) => min([new Date(current.date), result]),
    new Date(workouts[0]?.date),
  )

  return minDate ? format(minDate, 'MM/dd/yy') : null
}

const Schedule: React.FC = () => {
  const [current] = useMachine(scheduleMachine, { devTools: true })
  const [activeDate, setActiveDate] = React.useState(null)

  const { workouts } = current.context

  React.useEffect(() => {
    workouts.length ? setActiveDate(getMinDate(workouts)) : null
  }, [workouts])

  const datesSet = new Set(workouts?.map((workout) => workout.date))

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
        .filter((workout) => workout.date === activeDate)
        .map((workout) => {
          return <Workout key={workout.ref.id} workoutRef={workout.ref} />
        })}
    </React.Fragment>
  )
}

export default Schedule
