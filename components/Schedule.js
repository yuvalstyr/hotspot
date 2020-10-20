/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useMachine } from '@xstate/react';
import { format, min } from 'date-fns';
import React from 'react';
import { scheduleMachine } from '../machine/scheduleMachine';
import { Slider } from './Slider';
import { Workout } from './Workout';

const minDate = (workouts) => {
  const minDate = workouts?.reduce(
    (result, current) => min([new Date(current.date), result]),
    new Date(workouts[0]?.date)
  );

  return minDate ? format(minDate, 'MM/dd/yy') : null;
};

const Schedule = () => {
  const [current] = useMachine(scheduleMachine, { devTools: true });
  const { workouts } = current.context;
  const datesSet = new Set(workouts?.map((workout) => workout.date));
  const [activeDate, setActiveDate] = React.useState(null);

  React.useEffect(() => {
    workouts.length ? setActiveDate(minDate(workouts)) : null;
  }, [workouts]);
  if (current.matches('loading')) return <div>Loading...</div>;
  console.log('workouts', workouts);
  return (
    <React.Fragment>
      <pre>{JSON.stringify(current.toStrings().join(' '), null, 2)}</pre>
      {/* <Slider
        datesSet={datesSet}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      /> */}
      {workouts.map((workout) => (
        <Workout key={workout.id} workoutRef={workout.ref} />
      ))}
    </React.Fragment>
  );
};

export default Schedule;
