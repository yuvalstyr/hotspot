import {
  createStyles,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const styles = ({ palette }) =>
  createStyles({
    bar: {
      flexGrow: 1,
      backgroundColor: palette.secondary.main,
    },
    toolbar: {
      display: "grid",
      gridTemplate: "2/2",
      justifyContent: "space-between",
    },
    title: {
      alignSelf: "left",
      color: palette.getContrastText(palette.secondary.main),
    },
    img: {
      margin: "auto",
      maxWidth: "100%",
      height: "100%",
    },
    image: {
      height: "100px",
      gridRow: "1 / span 2",
      gridColumn: "2",
    },
  });

const useStyles = makeStyles(styles);

function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.title}>
          היי יובל !!
        </Typography>
        <Typography variant="body1" color="error" component="p">
          נשאר לך עוד 8 שיעורים בכרטיסיה
        </Typography>
        <div className={classes.image}>
          <img className={classes.img} alt="complex" src="/logo.jpg" />
        </div>
      </Toolbar>
    </div>
  );
}

export default TopBar;
