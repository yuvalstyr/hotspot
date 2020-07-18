import {
  Button,
  createStyles,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  Container,
  IconButton,
  Collapse,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import {
  ArrowLeftBoldCircleOutline,
  ArrowRightBoldCircleOutline,
  ChevronUpCircle,
  ChevronDownCircle,
} from "mdi-material-ui";
import React from "react";
import { MachineContext } from "../states";
import TopBar from "./TopBar";

const styles = ({ palette, spacing }) =>
  createStyles({
    container: {
      color: palette.primary.main,
      gridTemplateRows: "100px auto 4fr",
      height: "100%",
      width: "100%",
      display: "grid",
      gridGap: "0.5rem",
    },
    root: {
      display: "fl",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: spacing(0.5),
      },
    },
    header: {},
    slider: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
    },
    dayAvatar: {},
    dayAvatarDisable: {
      backgroundColor: palette.error.main,
      color: palette.getContrastText(palette.error.main),
    },
    listItem: {
      textAlign: "right",
      borderBottom: `1px solid`,
    },
    hours: {},
    nested: {
      paddingLeft: spacing(4),
    },
  });
const useStyles = makeStyles(styles);

const workoutDetails = [
  {
    time: "14:00",
    date: Date(),
    trainees: ["יובל", "יוסי"],
    type: "personal",
    left: 0,
  },
  {
    time: "15:00",
    date: Date(),
    trainees: ["לירון"],
    type: "personal",
    left: 1,
  },
  {
    time: "16:00",
    date: Date(),
    trainees: ["יולי", "נטע"],
    type: "team",
    left: 4,
  },
  {
    time: "17:00",
    date: Date(),
    trainees: ["לירון", "יולי", "נטע"],
    type: "team",
    left: 3,
  },
];

const WorkoutList = () => {
  const classes = useStyles();
  const [, send] = React.useContext(MachineContext);

  return (
    <div className={classes.hours}>
      <List>
        {workoutDetails.map((workout) => {
          return (
            //TODO change key from workout.time
            <Workout key={workout.time} workout={workout} />
          );
        })}
      </List>
      <Button
        color="primary"
        size="large"
        onClick={() => {
          console.log("heres");
          send("RETURN");
        }}
      >
        {HebrewConversion.back}
      </Button>
    </div>
  );
};

const Workout = ({ workout }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem className={classes.listItem} button>
        <ListItemText
          style={{ flex: 0 }}
          primary={workout.time}
          secondary={
            <Typography> {HebrewConversion[workout.type]} </Typography>
          }
        />
        <div style={{ textAlign: "center", flex: 1 }}>
          <Typography>{` ${workout.left} ${HebrewConversion.left}`}</Typography>
        </div>
        <Button color="secondary" variant="contained">
          {HebrewConversion.order}
        </Button>
        <IconButton color="secondary" onClick={handleClick}>
          {open ? <ChevronUpCircle /> : <ChevronDownCircle />}
        </IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <TrainersList trainees={workout.trainees} />
      </Collapse>
    </React.Fragment>
  );
};

const TrainersList = ({ trainees }) => {
  const classes = useStyles();
  return (
    //TODO change the key
    <List component="div" disablePadding>
      {trainees.map((trainee) => (
        <ListItem button className={classes.nested} key={trainee}>
          <ListItemText primary={trainee} />
        </ListItem>
      ))}
    </List>
  );
};

const Slider = () => {
  const classes = useStyles();

  return (
    <div className={classes.slider}>
      <ArrowRightBoldCircleOutline />
      <Avatar className={classes.dayAvatarDisable}>א</Avatar>
      <Avatar>ב</Avatar>
      <Avatar>ג</Avatar>
      <Avatar>ד</Avatar>
      <Avatar>ה</Avatar>
      <Avatar>ו</Avatar>
      <ArrowLeftBoldCircleOutline />
    </div>
  );
};

const Booking = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.container}>
      <div className={classes.header}>
        <TopBar />
      </div>
      <Slider />
      <div className={classes.hours}>
        <WorkoutList />
      </div>
    </Container>
  );
};

const HebrewConversion = {
  order: "הזמן",
  left: "מקומות פנויים",
  personal: "אישי",
  team: "קבוצתי",
  back: "חזרה",
};

export default Booking;
