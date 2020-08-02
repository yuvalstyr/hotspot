// import React from "react";
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { HebrewConversion } from "./Booking";
// import { MachineContext } from "../states";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// const useStyles = makeStyles(({ palette }) => ({
//   container: {
//     color: palette.primary.main,
//     backgroundColor: palette.background.default,
//     gridTemplateRows: "100px auto 4fr",
//     height: "100%",
//     width: "100%",
//     display: "grid",
//     gridGap: "0.5rem",
//   },
// }));

// export default function FullWidthTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);
//   const [, send] = React.useContext(MachineContext);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Container maxWidth="xs" className={classes.container}>
//       <div className={classes.root}>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             variant="fullWidth"
//           >
//             <Tab label="אימונים" />
//             <Tab label="היסטוריה" />
//           </Tabs>
//         </AppBar>
//         <SwipeableViews
//           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//           index={value}
//           onChangeIndex={handleChangeIndex}
//         >
//           <TabPanel value={value} index={0} dir={theme.direction}>
//             אימונים
//           </TabPanel>
//           <TabPanel value={value} index={1} dir={theme.direction}>
//             היסטוריה
//           </TabPanel>
//         </SwipeableViews>
//         <div style={{ width: "100%", textAlign: "center" }}>
//           <Button
//             color="secondary"
//             variant="contained"
//             size="large"
//             onClick={() => {
//               send("RETURN");
//             }}
//           >
//             {HebrewConversion.back}
//           </Button>
//         </div>
//       </div>
//     </Container>
//   );
// }

// const WorkoutList = (params) => {
//   const [, send] = React.useContext(MachineContext);

//   return (
//     <React.Fragment>
//       <List>
//         {workoutDetails.map((workout) => {
//           return (
//             //TODO change key from workout.time
//             <Workout key={workout.time} workout={workout} />
//           );
//         })}
//       </List>
//       <div style={{ width: "100%", textAlign: "center" }}>
//         <Button
//           color="secondary"
//           variant="contained"
//           size="large"
//           onClick={() => {
//             send("RETURN");
//           }}
//         >
//           {HebrewConversion.back}
//         </Button>
//       </div>
//     </React.Fragment>
//   );
// };
