import gql from 'graphql-tag';

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

export const BOOK_WORKOUT = gql`
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

export const UNBOOK_WORKOUT = gql`
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
