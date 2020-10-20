/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useActor } from '@xstate/react';
import React from 'react';
import { Collapse } from 'react-collapse';
import { Box, Button, Divider, Grid, Text, jsx } from 'theme-ui';
import HebrewConversion from '../lib/translate';
import { TrainersList } from './TrainersList';

/** @jsx jsx */

export const Workout = ({ workoutRef }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [state, send] = useActor(workoutRef);
  if (!state) return <div>Loading</div>;
  console.log('state', state);

  const { time, workType, trainees, id } = state.context;

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
            <Text>{HebrewConversion[workType]}</Text>
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
              <TrainersList trainees={trainees} />
            </Collapse>
          </Box>
        </Grid>
      </Box>
      <Divider bg="secondary" />
    </React.Fragment>
  );
};
