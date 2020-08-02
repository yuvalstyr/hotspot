import React from "react";
import { Flex, NavLink, jsx } from "theme-ui";
import { MachineContext } from "../states";
import Link from "next/link";
import { useRouter } from "next/router";

/** @jsx jsx */

export const Nav = () => {
  const [, send] = React.useContext(MachineContext);
  const router = useRouter();

  return (
    <Flex as="nav" sx={{ backgroundColor: "secondary" }}>
      <NavLink
        p={2}
        onClick={() => {
          send("TRAINING");
        }}
        sx={{ variant: "links" }}
      >
        אימונים
      </NavLink>
      <NavLink
        p={2}
        onClick={() => {
          send("SCHEDULE");
          router.push("/booking");
        }}
        sx={{ variant: "links" }}
      >
        הזנת אימון
      </NavLink>
      <NavLink p={2} sx={{ variant: "links" }}>
        תשלומים
      </NavLink>
    </Flex>
  );
};
