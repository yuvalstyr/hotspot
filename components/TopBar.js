import React from "react";
import { HebrewConversion } from "./Booking";
import { useMachine } from "@xstate/react";
import HotSpotMachine from "../states";

const styles = ({ palette }) =>
  createStyles({
    bar: {
      flexGrow: 1,
      backgroundColor: palette.secondary.main,
    },
    toolbar: {
      display: "grid",
      gridTemplateColumns: "1fr 3fr 1fr",
      justifyContent: "center",
      gridGap: "0.5rem",
    },
    title: {
      alignSelf: "left",
      color: palette.getContrastText(palette.secondary.main),
    },
    img: {
      width: "100%",
      height: "100%",
    },
    image: {
      height: "70px",
      width: "150px",
      textAlign: "center",
      gridColumnStart: 2,
    },
    button: {
      backgroundColor: palette.black.main,
      color: palette.getContrastText(palette.black.main),
    },
  });

const useStyles = makeStyles(styles);

function TopBar() {
  const [state, send] = useMachine(HotSpotMachine);
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.image}>
          <img className={classes.img} alt="complex" src="/logo.jpg" />
        </div>
        <div style={{ width: "100%", textAlign: "center", gridColumnStart: 3 }}>
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            onClick={() => {
              send("RETURN");
            }}
          >
            {HebrewConversion.back}
          </Button>
        </div>
      </Toolbar>
    </div>
  );
}

export default TopBar;
