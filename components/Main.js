import React from "react";
import { Grid, Image, jsx } from "theme-ui";
import { MachineContext } from "../states";

/** @jsx jsx */

const Main = () => {
  const [, send] = React.useContext(MachineContext);
  return (
    <Grid gap={2} columns={["1fr 1fr", 3]} sx={{ gridTemplateRows: "1fr 1fr" }}>
      <Image
        src={"/1.jpg"}
        sx={{
          objectFit: "cover",
          gridColumn: ["span 2", "span 1"],
          variant: "containers.image",
        }}
      />
      <Image
        src={"/3.jpg"}
        sx={{
          objectFit: "cover",
          variant: "containers.image",
        }}
      />
      <Image
        src={"/2.jpg"}
        sx={{
          objectFit: "cover",
          variant: "containers.image",
        }}
      />
    </Grid>
  );
};

export default Main;
