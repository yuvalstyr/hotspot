import React from "react";
import { Machine, assign, send } from "xstate";

export const MachineContext = React.createContext();

const workoutDetails = [
  {
    time: "14:00",
    date: "26.7",
    trainees: ["יובל", "יוסי"],
    type: "personal",
    left: 0,
  },
  {
    time: "15:00",
    date: "26.7",
    trainees: ["לירון"],
    type: "personal",
    left: 1,
  },
  {
    time: "16:00",
    date: "26.7",
    trainees: ["יולי", "נטע"],
    type: "team",
    left: 4,
  },
  {
    time: "17:00",
    date: "26.7",
    trainees: ["לירון", "יולי", "נטע"],
    type: "team",
    left: 3,
  },
  {
    time: "14:00",
    date: "27.7",
    trainees: ["יובל", "יוסי", "מוטי"],
    type: "personal",
    left: 6,
  },
  {
    time: "15:00",
    date: "27.7",
    trainees: ["לירון", "נעמה"],
    type: "personal",
    left: 4,
  },
  {
    time: "16:00",
    date: "27.7",
    trainees: ["נטע"],
    type: "team",
    left: 2,
  },
  {
    time: "17:00",
    date: "27.7",
    trainees: ["לירון", "יולי", "נטע", "נתי"],
    type: "team",
    left: 2,
  },
];

const fetchWorkouts = async (date) => {
  return {
    date: date,
    workouts: workoutDetails.filter((workout) => workout.date === date),
  };
};

const HotSpotMachine = Machine({
  context: {
    booking: "",
    canReturn: true,
    day: "",
    activeDay: "",
  },
  id: "hotspot",
  initial: "init",
  states: {
    init: {
      on: {
        SCHEDULE: {
          target: "schedule",
        },
      },
      TRAINING: "training",
    },
    schedule: {
      id: "schedule",
      initial: "loading",
      context: {
        canReturn: true,
      },
      states: {
        loading: {
          invoke: {
            id: "getDayWorkouts",
            src: (context, event) => fetchWorkouts("26.7"),
            onDone: {
              target: "active",
              actions: assign({
                day: (context, event) => event.data,
              }),
            },
            onError: {
              target: "error",
              actions: assign({ error: (context, event) => event.data }),
            },
          },
        },
        active: {
          on: {
            CHANGE_DAY: {
              target: "changing",
            },
          },
        },
        error: {},
        changing: {
          invoke: {
            id: "getDayWorkouts",
            src: (context, event) => fetchWorkouts(event.date),
            onDone: {
              target: "active",
              actions: assign({
                day: (context, event) => event.data,
              }),
            },
            onError: {
              target: "error",
              actions: assign({ error: (context, event) => event.data }),
            },
          },
          on: {
            CHANGED: "active",
            RETURN: undefined,
          },
        },
        booking: {
          invoke: {
            id: "getDayWorkouts",
            src: (context, event) => fetchWorkouts(event.date),
            onDone: {
              target: "active",
              actions: assign({
                day: (context, event) => event.data,
              }),
            },
            onError: {
              target: "error",
              actions: assign({ error: (context, event) => event.data }),
            },
          },
          on: {
            ADDED: "active",
            RETURN: undefined,
          },
        },
        removing: {
          on: {
            REMOVED: "active",
            RETURN: undefined,
          },
        },
      },
    },
    training: {
      id: "training",
      initial: "loading",
      states: {
        loading: {
          always: "active",
        },
        active: {},
      },
    },
  },
  on: {
    RETURN: {
      target: "init",
    },
  },
});
export default HotSpotMachine;
