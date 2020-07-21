import { Button, makeStyles, createStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import ImageGridList from "./ImageGridList";
import TopBar from "./TopBar";
import { MachineContext } from "../states";

const styles = ({ palette }) =>
  createStyles({
    root: {
      padding: 0,
    },
    container: {
      color: palette.primary.main,
      display: "grid",
      gridTemplateRows: "100px auto 4fr",
      height: "100%",
      width: "100%",
      gridGap: "0.5rem",
    },
    header: {
      gridRow: "1/2",
      backgroundColor: "blue",
    },
    buttons: {
      display: "grid",
      gridGap: "0.5rem",
      padding: "0.5rem",
      gridAutoFlow: "column",
      gridTemplateColumns: " repeat(3, minmax(0, 1fr))",
      maxHeight: "80px",
    },
    button: {
      backgroundColor: "#f7b42c",
      backgroundImage: "linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",
      color: palette.getContrastText("#f7b42c"),
    },
  });

export const useStyles = makeStyles(styles);

const Main = () => {
  const classes = useStyles();
  const [, send] = React.useContext(MachineContext);

  return (
    <Container maxWidth="xs" className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <TopBar />
        </div>
        <div className={classes.buttons}>
          <Button className={classes.button} size="large">
            תשלומים
          </Button>

          <Button
            className={classes.button}
            size="large"
            onClick={() => {
              send("BOOKING");
            }}
          >
            הזמנת אימון
          </Button>
          <Button
            className={classes.button}
            size="large"
            onClick={() => {
              send("TRAINING");
            }}
          >
            אימונים
          </Button>
        </div>
        <ImageGridList />
      </div>
    </Container>
  );
};

export default Main;
