import { useMachine } from "@xstate/react";
import React from "react";
import Main from "../components/Main";
import HotSpotMachine, { MachineContext } from "../states/index";
import Booking from "./Booking";

const Index = () => {
  const [state, send] = useMachine(HotSpotMachine);
  return (
    <React.Fragment>
      <MachineContext.Provider value={[state, send]}>
        {/* <Main /> */}
        {state.matches("init") && <Main />}
        {state.matches("booking.active") && <Booking />}
        <pre style={{ color: "white", direction: "ltr" }}>
          {JSON.stringify(state.value, null, 2)}
        </pre>
        <pre style={{ color: "white", direction: "ltr" }}>
          {JSON.stringify(state.context, null, 2)}
        </pre>
        <pre style={{ color: "white", direction: "ltr" }}>
          {state.matches("booking.active") ? "Yep" : "Nope"}
        </pre>
      </MachineContext.Provider>
    </React.Fragment>
  );
};

export default Index;
