import React from "react"
import { Collapse } from "react-collapse"
import { Box, Button, Divider, Grid, Text, jsx } from "theme-ui"
import HebrewConversion from "../lib/translate"
import { TrainersList } from "./TrainersList"
import {
  ScheduleMachineStateContext,
  ScheduleMachineDispatchContext,
} from "../states/schedule"

/** @jsx jsx */

export const Workout = ({ workout }) => {
  const [isOpened, setIsOpened] = React.useState(false)
  const scheduleState = React.useContext(ScheduleMachineStateContext)
  const scheduleDispath = React.useContext(ScheduleMachineDispatchContext)

  const { time, type, id } = workout
  return (
    <React.Fragment>
      <Box p={2} color="white">
        <Grid
          gap={2}
          columns={["auto minmax(50px,1fr) auto  auto"]}
          sx={{ justifyContent: "space-between" }}
        >
          <Box>{time}</Box>
          <Box
            sx={{
              color: "primary",
              bg: "transparent",
              boxShadow: "inset 0 0 0 1px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <Text>{HebrewConversion[type]}</Text>
          </Box>
          <Box>
            <Button onClick={() => setIsOpened(!isOpened)}>מי בא?</Button>
          </Box>
          <Box>
            <Button
              onClick={() => scheduleDispath({ type: "BOOK", workoutId: id })}
            >
              הזמן
            </Button>
          </Box>
          <Box
            sx={{
              gridColumn: "3 / 5",
            }}
          >
            <Collapse isOpened={isOpened}>
              <TrainersList trainees={workout.trainees} />
            </Collapse>
          </Box>
        </Grid>
      </Box>
      <Divider bg="secondary" />
    </React.Fragment>
  )
}
