import React from "react";
import { Machine, assign } from "xstate";

export const MachineContext = React.createContext();

const assignCanReturn = assign({
  canReturn: (context) => !context.canReturn,
});

const HotSpotMachine = Machine({
  context: {
    booking: "",
    canReturn: true,
  },
  id: "hotspot",
  initial: "init",
  states: {
    init: {
      on: {
        BOOKING: "booking",
      },
    },
    booking: {
      id: "booking",
      initial: "loading",
      context: {
        canReturn: true,
      },
      states: {
        loading: {
          on: {
            "": "active",
          },
        },
        active: {
          on: {
            CHANGE: {
              target: "changing",
            },
          },
        },
        changing: {
          onEntry: assignCanReturn,
          onExit: assignCanReturn,
          on: {
            CHANGED: "active",
          },
        },
        adding: {
          onEntry: assignCanReturn,
          onExit: assignCanReturn,
          on: {
            ADDED: "active",
          },
        },
        removing: {
          onEntry: assignCanReturn,
          onExit: assignCanReturn,
          on: {
            REMOVED: "active",
          },
        },
      },
    },
  },
  on: {
    RETURN: {
      target: "init",
      cond: (context) => context.canReturn,
    },
  },
});
export default HotSpotMachine;
