import * as React from 'react'
import { useActor } from '@xstate/react'
import { Collapse } from 'react-collapse'
import { Alert, Box, Button, Close, Divider, Grid, Text, jsx } from 'theme-ui'
import { translate } from '../lib/translate'
import {
  WorkoutActorType,
  workoutsEvents,
} from '../machine/workoutMachine.types'
import TrainersList from './TrainersList'
import { format } from 'date-fns'

/** @jsx jsx */

interface Prop {
  workoutRef: WorkoutActorType
}

const WorkoutButton: React.FunctionComponent<Prop> = ({ workoutRef }) => {
  const [state, send] = useActor(workoutRef)
  if (!state) return null

  const { id: workoutId, user } = state.context

  const isAlreadyBooked = state.context.trainees?.some(
    (trainee) => trainee.id === user.id,
  )
  const bookEvent = isAlreadyBooked ? 'DELETE' : 'BOOK'

  return (
    <Box>
      <Button
        onClick={() =>
          send({ type: workoutsEvents[bookEvent], workoutId: workoutId })
        }
      >
        {translate(bookEvent)}
      </Button>
    </Box>
  )
}

export const Workout: React.FunctionComponent<Prop> = ({ workoutRef }) => {
  const [isOpened, setIsOpened] = React.useState(false)
  const [state, send] = useActor(workoutRef)

  if (!state) return null
  console.log('state', state)
  const { date, workoutType, trainees } = state.context

  return (
    <React.Fragment>
      <Box p={2} color="white">
        <Grid
          gap={2}
          columns={['auto minmax(50px,1fr) auto  auto']}
          sx={{ justifyContent: 'space-between' }}
        >
          <Box>{format(new Date(date), 'kk:kk')}</Box>
          <Box
            sx={{
              color: 'primary',
              bg: 'transparent',
              boxShadow: 'inset 0 0 0 1px',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <Text>{translate(workoutType)}</Text>
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
              <Close
                ml="auto"
                mr={-2}
                onClick={() => send({ type: workoutsEvents.CLOSE })}
              />
            </Alert>
          )}
        </Grid>
      </Box>
      <Divider bg="secondary" />
    </React.Fragment>
  )
}
