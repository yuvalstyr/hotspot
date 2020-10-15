import { gql } from '@apollo/client';
import { assign, Machine } from 'xstate';
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
// TODO add "@apollo/link-error": "^2.0.0-beta.3",nexusu/schema

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

const getWorkouts = () =>
  client.query({ query: WORKOUTS, fetchPolicy: 'network-only' }).then((res) => {
    if (res.errors) {
      throw res.errors;
    } else {
      return res.data;
    }
  });

const bookWorkout = (context, event) => {
  const { workoutId } = event;
  const { user } = context;

  return client.mutate({
    mutation: BOOK_WORKOUT,
    variables: { traineeId: user.id, workoutId: workoutId },
  });
};

const assignWorkoutId = assign({
  workoutId: (context, event) => event.workoutId,
});
export const scheduleMachine = Machine({
  id: 'schedule',
  initial: 'loading',
  context: {
    weeklyWorkouts: null,
    user: {
      id: 4,
      email: 'bla@bla.com',
      firstName: 'שרון',
      lastName: 'גל',
    },
    workoutId: null,
  },
  states: {
    loading: {
      invoke: {
        src: getWorkouts,
        onDone: {
          target: 'workouts',
          actions: assign({
            weeklyWorkouts: (_, event) => event.data.workoutsPerWeek,
          }),
        },
        onError: {
          target: 'failure',
        },
      },
    },
    workouts: {
      on: {
        LOADING: {},
        BOOK: { target: 'booking', actions: assignWorkoutId },
        CANCEL: 'cancelling',
        DAY: 'changingDay',
        NEXT_WEEK: 'changingWeek',
        PERVIOUS_WEEK: 'changingWeek',
      },
    },

    booking: {
      invoke: {
        id: 'book_workout',
        src: (context, event) => bookWorkout(context, event),
        onDone: {
          target: 'booked',
          actions: assign({
            weeklyWorkouts: (context) => {
              const { user, weeklyWorkouts, workoutId } = context;
              const workouts = JSON.parse(JSON.stringify(weeklyWorkouts));
              const returnWorkouts = workouts.map((w) => {
                if (w.id === workoutId) w.trainees = [...w.trainees, user];
                return w;
              });
              return returnWorkouts;
            },
          }),
        },
        onError: {
          target: 'failure',
        },
      },
    },
    booked: {
      on: {
        CLOSE: 'workouts',
      },
    },
    cancelling: {
      invoke: {
        id: 'cancel_workout',
        src: 'canceledWorkout',
        onDone: {
          target: 'canceled',
        },
        onError: {
          target: 'failure',
        },
      },
    },
    canceled: {
      on: {
        CLOSE: 'workouts',
      },
    },
    changingDay: {
      invoke: {
        id: 'change_day',
        src: 'changeDay',
        onDone: {
          target: 'workouts',
        },
        onError: {
          target: 'failure',
        },
      },
    },
    changingWeek: {
      type: 'final',
    },
    cancelBooking: {
      invoke: {
        id: 'cancel_workout',
        src: 'canceledWorkout',
        onDone: {
          target: 'canceled',
        },
        onError: {
          target: 'failure',
        },
      },
    },
    failure: {
      on: {
        RETRY: 'workouts',
      },
    },
  },
});
