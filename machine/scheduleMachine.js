import { gql } from "@apollo/client"
import { assign, Machine } from "xstate"
import { initializeApollo } from "../apollo/apolloClient"

const client = initializeApollo()

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
`

const BOOK_WORKOUT = gql`
  mutation bookWorkout($traineeId: Int!, $workoutId: Int!) {
    updateOneWorkout(
      data: { trainees: { connect: { id: $traineeId } } }
      where: { id: $workoutId }
    ) {
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
`

const getWorkouts = () =>
  client.query({ query: WORKOUTS, fetchPolicy: "network-only" }).then((res) => {
    if (res.errors) {
      throw res.errors
    } else {
      return res.data
    }
  })

//TODO complete: after booking a workout need to update the UI by apollo cache or xstate context
const bookWorkout = (context, event) => {
  const { workoutId } = event
  const { user } = context
  console.log("user", user)
  return client.mutate({
    mutation: BOOK_WORKOUT,
    variables: { traineeId: user.id, workoutId: workoutId },
  })
}

const addTrineeToWorkout = (context) => {
  const { user, weeklyWorkouts, workoutId } = context
  const workouts = JSON.parse(JSON.stringify(weeklyWorkouts))
  const returnWorkouts = workouts.map((w) => {
    if (w.id === workoutId) w.trainees = [...w.trainees, user]
    return w
  })
  return assign({
    weeklyWorkouts: () => returnWorkouts,
  })
}

const assignWorkoutId = assign({
  workoutId: (context, event) => event.workoutId,
})
export const scheduleMachine = Machine({
  id: "schedule",
  initial: "loading",
  context: {
    weeklyWorkouts: null,
    user: {
      __typename: "User",
      id: 2,
      email: "bla@bla.com",
      firstName: "לירון",
      lastName: "בן שטרית",
    },
    workoutId: null,
  },
  states: {
    loading: {
      invoke: {
        src: getWorkouts,
        onDone: {
          target: "workouts",
          actions: assign({
            weeklyWorkouts: (_, event) => event.data.workoutsPerWeek,
          }),
        },
        onError: {
          target: "failure",
        },
      },
    },
    workouts: {
      on: {
        LOADING: {},
        BOOK: { target: "booking", actions: assignWorkoutId },
        CANCEL: "cancelling",
        DAY: "changingDay",
        NEXT_WEEK: "changingWeek",
        PERVIOUS_WEEK: "changingWeek",
      },
    },
    booking: {
      invoke: {
        id: "book_workout",
        src: (context, event) => bookWorkout(context, event),
        onDone: {
          target: "booked",
          actions: addTrineeToWorkout,
        },
        onError: {
          target: "failure",
        },
      },
    },
    booked: {
      on: {
        CLOSE: "workouts",
      },
    },
    cancelling: {
      invoke: {
        id: "cancel_workout",
        src: "canceledWorkout",
        onDone: {
          target: "canceled",
        },
        onError: {
          target: "failure",
        },
      },
    },
    canceled: {
      on: {
        CLOSE: "workouts",
      },
    },
    changingDay: {
      invoke: {
        id: "change_day",
        src: "changeDay",
        onDone: {
          target: "workouts",
        },
        onError: {
          target: "failure",
        },
      },
    },
    changingWeek: {
      type: "final",
    },
    cancelBooking: {
      invoke: {
        id: "cancel_workout",
        src: "canceledWorkout",
        onDone: {
          target: "canceled",
        },
        onError: {
          target: "failure",
        },
      },
    },
    failure: {
      on: {
        RETRY: "workouts",
      },
    },
  },
})
