import { useRouter } from "next/router";
import React from "react";
import Main from "../components/Main";
import { MachineContext } from "../states";
import Training from "./Training";
import Booking from "./Booking";

const Index = () => {
  const router = useRouter();
  const [state, send] = React.useContext(MachineContext);

  React.useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      console.log("beforePopState", url, as, options);
      return true;
    });
  });

  return (
    <React.Fragment>
      {state.matches("init") && <Main />}
      {state.matches("booking") && <Booking />}
      {state.matches("training.active") && <Training />}
    </React.Fragment>
  );
};

export default Index;
