import React from "react";
import { Machine } from "xstate";
import { Router } from "next/router";

export const MachineContext = React.createContext();

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
        BOOKING: {
          target: "booking",
        },
      },
      TRAINING: "training",
    },
    booking: {
      id: "booking",
      initial: "loading",
      context: {
        canReturn: true,
      },
      states: {
        loading: {
          always: "active",
        },
        active: {
          on: {
            CHANGE: {
              target: "changing",
            },
          },
        },
        changing: {
          on: {
            CHANGED: "active",
            RETURN: undefined,
          },
        },
        adding: {
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
