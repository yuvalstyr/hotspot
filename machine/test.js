// Available variables:
// - Machine
// - interpret
// - assign
// - send
// - sendParent
// - spawn
// - raise
// - actions
// - XState (all XState exports)

const { assign } = require('xstate/lib/actionTypes');
const { Machine } = require('xstate');

const changeDay = () => true;
const canReturn = (context, event, condMeta) => {
  console.log('state', context);
  return context.canReturn;
};

const HotSpotMachine = Machine({
  context: {
    booking: '',
    canReturn: true,
  },
  id: 'hotspot',
  initial: 'init',
  states: {
    init: {
      on: {
        BOOKING: 'booking',
      },
    },
    booking: {
      id: 'booking',
      initial: 'active',
      context: {
        canReturn: true,
      },
      states: {
        active: {
          on: {
            CHANGE: 'changing',
            actions: assign({ canReturn: () => false }),
          },
        },
        changing: {
          invoke: {
            src: changeDay,
            onDone: 'active',
          },
        },
        adding: {},
        removing: {},
      },
    },
  },
  on: {
    RETURN: {
      target: 'init',
      cond: canReturn,
    },
  },
});

console.log(HotSpotMachine);
