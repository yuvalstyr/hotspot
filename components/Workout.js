import { useMachine } from '@xstate/react';
import React from 'react';
import { Collapse } from 'react-collapse';
import { Box, Button, Divider, Grid, Text, jsx } from 'theme-ui';
import HebrewConversion from '../lib/translate';
import { scheduleMachine } from '../machine/scheduleMachine';
import { TrainersList } from './TrainersList';

/** @jsx jsx */

export const Workout = ({ workout }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [current, send] = useMachine(scheduleMachine);

  const { time, type, id } = workout;
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
            <Text>{HebrewConversion[type]}</Text>
          </Box>
          <Box>
            <Button onClick={() => setIsOpened(!isOpened)}>מי בא?</Button>
          </Box>
          <Box>
            <Button onClick={() => send({ type: 'BOOK', workoutId: id })}>
              הזמן
            </Button>
          </Box>
          <Box
            sx={{
              gridColumn: '3 / 5',
            }}
          >
            <Collapse isOpened={isOpened}>
              <TrainersList
                trainees={
                  current.context.weeklyWorkouts?.filter(
                    (workout) => workout.id === id
                  )[0]?.trainees
                }
              />
            </Collapse>
          </Box>
        </Grid>
      </Box>
      <Divider bg="secondary" />
    </React.Fragment>
  );
};
