/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { useActor } from '@xstate/react';
import { Interpreter } from 'xstate';
import { Collapse } from 'react-collapse';
import { Box, Button, Divider, Grid, Text, jsx, Close } from 'theme-ui';
import HebrewConversion from '../lib/translate';
import { TrainersList } from './TrainersList';
import propTypes from 'prop-types';
import { Alert } from 'theme-ui';

/** @jsx jsx */

const WorkoutButton = ({ workoutRef }) => {
  const [state, send] = useActor(workoutRef);
  if (!state) return null;
  const { id: workoutId, user } = state.context;
  const isAlreadyBooked = state.context.trainees.some(
    (trainee) => trainee.id === user.id
  );
  const typeObj = isAlreadyBooked
    ? { type: 'DELETE', text: 'בטל' }
    : { type: 'BOOK', text: 'הזמן' };

  return (
    <Box>
      <Button
        onClick={() => send({ type: typeObj.type, workoutId: workoutId })}
      >
        {typeObj.text}
      </Button>
    </Box>
  );
};

export const Workout = ({ workoutRef }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [state, send] = useActor(workoutRef);

  if (!state) return null;

  const { time, workoutType, trainees, id } = state.context;

  return (
    <React.Fragment>
      <Box p={2} color="white">
        <Grid
          gap={2}
          columns={['auto minmax(50px,1fr) auto  auto']}
          sx={{ justifyContent: 'space-between' }}
        >
          <Box>{time}</Box>
          <Box
            sx={{
              color: 'primary',
              bg: 'transparent',
              boxShadow: 'inset 0 0 0 1px',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <Text>{HebrewConversion[workoutType]}</Text>
          </Box>
          <Box>
            <Button onClick={() => setIsOpened(!isOpened)}>מי בא?</Button>
          </Box>
          <WorkoutButton workoutRef={workoutRef} />
          <Box
            sx={{
              gridColumn: '3 / 5',
            }}
          >
            <Collapse isOpened={isOpened}>
              <TrainersList trainees={trainees} />
            </Collapse>
          </Box>
          {state.matches('failure') && (
            <Alert
              variant="error"
              sx={{
                gridColumn: '1 / 5',
                direction: 'ltr',
              }}
            >
              {state.context.error}
              <Close ml="auto" mr={-2} onClick={() => send('CLOSE')} />
            </Alert>
          )}
        </Grid>
      </Box>
      <Divider bg="secondary" />
    </React.Fragment>
  );
};

Workout.propTypes = {
  workoutRef: propTypes.instanceOf(Interpreter),
};
