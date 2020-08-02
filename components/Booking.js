import React from "react";
import { MachineContext } from "../states";
import { Flex, jsx, IconButton } from "theme-ui";
import { Avatar } from "theme-ui";
import { mdiArrowRightBoldCircle, mdiArrowLeftBoldCircle } from "@mdi/js";
import Icon from "@mdi/react";
/** @jsx jsx */

const Workout = ({ workout }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem className={classes.listItem}>
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
  return (
    <Flex sx={{ p: "1rem", justifyContent: "space-between", width: "100%" }}>
      {/* <ArrowRightBoldCircleOutline /> */}
      <Icon
        path={mdiArrowRightBoldCircle}
        size={2}
        sx={{ color: "secondary", alignSelf: "end" }}
      ></Icon>

      {daysArray.map((day) => {
        const { full, firstLetter } = HebrewConversion[day.day];
        return (
          <div
            key={day.date}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>{full}</div>
            <div
              sx={{
                width: "40px",
                height: "40px",
                display: "flex",
                fontSize: "1.25rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "primary",
              }}
            >
              {firstLetter}
            </div>
          </div>
        );
        // <DayAvatar key={day.date} day={day.day} date={day.date} />
      })}
      <Icon
        path={mdiArrowLeftBoldCircle}
        size={2}
        sx={{ color: "secondary", alignSelf: "end" }}
      ></Icon>
    </Flex>
  );
};

const DayAvatar = ({ day, date }) => {
  const [{ context }, send] = React.useContext(MachineContext);

  const avatarClassName =
    context.day.date === date ? "dayAvatarActive" : "dayAvatar";

  const changeDay = () => send({ type: "CHANGE_DAY", date });

  return (
    <Grid container maxWidth="xs" justify="center">
      <Grid item xs={12}>
        <Typography align="center">{HebrewConversion[day]}</Typography>
      </Grid>
      <Avatar
        className={classes[avatarClassName]}
        onClick={() => changeDay("CHANGE_DAY")}
      >
        {date}
      </Avatar>
    </Grid>
  );
};

const Booking = () => {
  const day = daysArray[0].day;
  return <Slider />;
};

export const HebrewConversion = {
  order: "הזמן",
  left: "מקומות פנויים",
  personal: "אישי",
  team: "קבוצתי",
  back: "חזרה",
  sunday: { full: "ראשון", firstLetter: "א" },
  monday: { full: "שני", firstLetter: "ב" },
  tuesday: { full: "שלישי", firstLetter: "ג" },
  wednesday: { full: "רביעי", firstLetter: "ד" },
  thursday: { full: "חמישי", firstLetter: "ה" },
  friday: { full: "שישי", firstLetter: "ו" },
};

const daysArray = [
  {
    day: "sunday",
    date: "26.7",
    active: false,
  },
  {
    day: "monday",
    date: "27.7",
    active: false,
  },
  {
    day: "tuesday",
    date: "28.7",
    active: false,
  },
  {
    day: "wednesday",
    date: "29.7",
    active: false,
  },
  {
    day: "thursday",
    date: "30.7",
    active: false,
  },
  {
    day: "friday",
    date: "31.7",
    active: false,
  },
];

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

export default Booking;
