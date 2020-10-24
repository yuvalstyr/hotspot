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
      firstName
      lastName
      email
    }
  }
`;

const UNBOOK_WORKOUT = gql`
  mutation deleteBookedWorkout($traineeId: Int!, $workoutId: Int!) {
    deleteBookedWorkout(traineeId: $traineeId, workoutId: $workoutId) {
      __typename
      id
      firstName
      lastName
      email
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

export const unbookWorkout = (context, event) => {
  const { workoutId } = event;
  const { user } = context;
  return client
    .mutate({
      mutation: UNBOOK_WORKOUT,
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
  user,
}) => {
  return createMachine({
    id: 'booking',
    initial: 'active',
    context: {
      id,
      time,
      hour,
      trainees,
      workoutType,
      user,
    },
    states: {
      active: {
        on: {
          BOOK: 'booking',
          DELETE: 'unbooking',
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
                trainees: ({ trainees }, { data }) => {
                  return trainees.concat(data.bookWorkout);
                },
              }),
            ],
          },
          onError: {
            target: 'failure',
            actions: assign({
              error: (_, event) => {
                console.log('event', event);
                return event.data.message;
              },
            }),
          },
        },
      },
      unbooking: {
        invoke: {
          src: (context, event) => unbookWorkout(context, event),
          onDone: {
            target: 'active',
            actions: [
              // Todo add to actions array sendToParent event that will update paid workouts
              assign({
                trainees: (context, event) => {
                  const {
                    data: { deleteBookedWorkout: user },
                  } = event;

                  return trainees.filter((trainee) => trainee.id !== user.id);
                },
              }),
            ],
          },
          onError: {
            target: 'failure',
            actions: assign({
              error: (_, event) => {
                console.log('event', event);
                return event.data.message;
              },
            }),
          },
        },
      },
      failure: {
        on: {
          CLOSE: 'active',
        },
      },
    },
  });
};
export const scheduleMachine = createMachine({
  id: 'schedule',
  context: {
    workouts: [],
    paidWorkout: 10,
    user: {
      id: 5,
      email: 'bla@bla.com',
      firstName: 'אלי',
      lastName: 'בן',
    },
  },
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        src: getWorkouts,
        onDone: {
          target: 'active',
          actions: assign({
            workouts: (context, event) => {
              return event.data.workoutsPerWeek.map((workout) => {
                return {
                  date: workout.date,
                  ref: spawn(
                    createWorkoutMachine({ ...workout, user: context.user })
                  ),
                };
              });
            },
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
