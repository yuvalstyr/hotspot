import React from "react"
import { Machine, assign } from "xstate"
import { useMachine } from "@xstate/react"
import { useMutation, gql } from "@apollo/client"
import { initializeApollo } from "../apollo/apolloClient"
import { workouts } from "../pages/schedule"

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
        firstName
        lastName
        email
      }
    }
  }
`
//TODO complete: after booking a workout need to update the UI by apollo chach or xstate context
const bookWorkout = (context, event) => {
  client.mutate({
    mutation: BOOK_WORKOUT,
    variables: { traineeId: 6, workoutId: context.workoutId },
    // optimisticResponse: {
    //   __typename: "Mutation",
    //   updateOneWorkout: {
    //     __typename: "User",
    //     id: context.id,
    //   },
    // },
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
      userId: 1,
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
          src: bookWorkout,
          onDone: {
            target: "booked",
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
