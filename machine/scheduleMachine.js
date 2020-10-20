/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { gql } from '@apollo/client';
import { assign, createMachine, spawn } from 'xstate';
import { initializeApollo } from '../apollo/apolloClient.ts';

const client = initializeApollo();

export const WORKOUTS = gql`
  query {
    workoutsPerWeek {
      id
      status
      type
      date
      time
      trainees {
        id
        firstName
        lastName
      }
    }
  }
`;

const BOOK_WORKOUT = gql`
  mutation bookWorkout($traineeId: Int!, $workoutId: Int!) {
    bookWorkout(traineeId: $traineeId, workoutId: $workoutId) {
      __typename
      id
      status
      type
      trainees {
        __typename
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const getWorkouts = () =>
  client.query({ query: WORKOUTS, fetchPolicy: 'network-only' }).then((res) => {
    if (res.errors) {
      throw res.errors;
    } else {
      return res.data;
    }
  });

export const bookWorkout = (context, event) => {
  const { workoutId } = event;
  const { user } = context;

  return client
    .mutate({
      mutation: BOOK_WORKOUT,
      variables: { traineeId: user.id, workoutId: workoutId },
    })
    .then((res) => {
      if (res.errors) {
        throw res.errors;
      } else {
        return res.data;
      }
    });
};

export const createWorkoutMachine = ({
  id,
  time,
  hour,
  trainees,
  type: workoutType,
}) =>
  createMachine({
    id: 'booking',
    initial: 'active',
    context: {
      id,
      time,
      hour,
      trainees,
      workoutType,
    },
    states: {
      active: {
        on: {
          Book: 'booking',
          Delete: {},
        },
      },
      booking: {
        invoke: {
          src: (context, event) => bookWorkout(context, event),
          onDone: {
            target: 'active',
            actions: [
              // Todo add to actions array sendToParent event that will update paid workouts
              assign({
                trainees: ({ trainees }, event) => {
                  return trainees.concat(event.trainee);
                },
              }),
            ],
          },
          onError: {
            target: 'failure',
          },
        },
      },
      failure: {},
    },
  });

export const scheduleMachine = createMachine({
  id: 'schedule',
  context: {
    workouts: [],
    paidWorkout: 10,
  },
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        src: getWorkouts,
        onDone: {
          target: 'active',
          actions: assign({
            workouts: (_, event) =>
              event.data.workoutsPerWeek.map((workout) => {
                return {
                  date: workout.date,
                  ref: spawn(createWorkoutMachine(workout)),
                };
              }),
          }),
        },
        onError: {
          target: 'failure',
        },
      },
    },
    active: {},
    failure: {},
  },
});
