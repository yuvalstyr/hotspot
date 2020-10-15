import { useMachine } from '@xstate/react';
import React from 'react';
import { scheduleMachine } from '../machine/scheduleMachine';
import { Workout } from './Workout';

export const Workouts = ({ activeDate }) => {
  const [current] = useMachine(scheduleMachine);
  const { weeklyWorkouts } = current.context;
  console.log('activeDate', activeDate);
  React.useEffect(() => {
    console.log('changed');
  }, [weeklyWorkouts]);

  const workoutDetails = weeklyWorkouts?.filter((w) => w.date === activeDate);

  console.log('workoutDetails', workoutDetails);
  return workoutDetails
    ? workoutDetails.map((workout) => (
        <Workout key={workout.id} workout={workout} />
      ))
    : null;
};
