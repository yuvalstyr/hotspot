import { gql } from "@apollo/client"
import { useMachine } from "@xstate/react"
import React from "react"
import { assign, Machine } from "xstate"
import { initializeApollo } from "../apollo/apolloClient"

const client = initializeApollo()

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

const addTrineeToWorkout = (context, event) => {
  const { user, weeklyWorkouts, workoutId } = context
  const workouts = JSON.parse(JSON.stringify(weeklyWorkouts))
  const returnWorkouts = workouts.map((w) => {
    if (w.id === workoutId) w.trainees = [...w.trainees, user]
    return w
  })
  console.log("workouts after", returnWorkouts)
  return assign({
    weeklyWorkouts: (context) => returnWorkouts,
  })
}

const assignWorkoutId = assign({
  workoutId: (context, event) => event.workoutId,
})

const createScheduleMachine = (weeklyWorkouts) =>
  Machine({
    id: "schedule",
    initial: "workouts",
    context: {
      weeklyWorkouts,
      user: {
        __typename: "User",
        id: 4,
        email: "bla@bla.com",
        firstName: "שרון",
        lastName: "גל",
      },
      workoutId: null,
    },
    states: {
      workouts: {
        on: {
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

export const ScheduleMachineStateContext = React.createContext()
export const ScheduleMachineDispatchContext = React.createContext()

export const ScheduleMachineProvider = ({ children, data }) => {
  const [current, send] = useMachine(createScheduleMachine(data))
  return (
    <ScheduleMachineStateContext.Provider value={current}>
      <ScheduleMachineDispatchContext.Provider value={send}>
        {children}
      </ScheduleMachineDispatchContext.Provider>
    </ScheduleMachineStateContext.Provider>
  )
}
