import React from "react";
import Main from "../components/Main";
import { useRouter } from "next/router";
import Booking from "./Booking";
import Training from "./Training";
import { MachineContext } from "../states";

const Index = () => {
  const router = useRouter();
  const [state, send] = React.useContext(MachineContext);
  if (state.matches("booking.active")) router.push("/booking");
  return (
    <React.Fragment>
      <Main />
      {state.matches("training.active") && <Training />}
    </React.Fragment>
  );
};

export default Index;
