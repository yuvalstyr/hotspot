import React from "react"
import { Machine } from "xstate"
import { useMachine } from "@xstate/react"

const ScheduleMachine = Machine({
  id: "schedule",
  initial: "workouts",
  context: {
    test: null,
  },
  states: {
    workouts: {
      on: {
        BOOK: "booking",
        CANCEL: "cancelling",
        DAY: "changingDay",
        NEXT_WEEK: "changingWeek",
        PERVIOUS_WEEK: "changingWeek",
      },
    },
    booking: {
      invoke: {
        id: "book_workout",
        src: "bookedWorkout",
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

export const ScheduleMachineProvider = ({ children }) => {
  const [current, send] = useMachine(ScheduleMachine)
  return (
    <ScheduleMachineStateContext.Provider value={current}>
      <ScheduleMachineDispatchContext.Provider value={send}>
        {children}
      </ScheduleMachineDispatchContext.Provider>
    </ScheduleMachineStateContext.Provider>
  )
}

export default ScheduleMachine
