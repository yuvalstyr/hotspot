const booking = {
  id: "booking",
  initial: "active",
  context: {
    days: [],
  },
  states: {
    idle: {
      on: {
        REMOVE: "removing",
        ADD: "adding",
      },
    },
    loading: {
      entry: {
        target: "active",
      },
    },
    active: {},
    adding: {},
    removing: {},
  },
};

export default booking;
