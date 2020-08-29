import { format, min } from "date-fns"
import React from "react"
import { ScheduleMachineStateContext } from "../states/schedule"
import { Slider } from "./Slider"
import { Workouts } from "./Workouts"

const minDate = (workouts) => {
  const minDate = workouts.reduce(
    (result, current) => min([new Date(current.date), result]),
    new Date(workouts[0].date)
  )

  return format(minDate, "MM/dd/yy")
}

const Schedule = ({ workouts }) => {
  const scheduleState = React.useContext(ScheduleMachineStateContext)
  const datesSet = new Set(workouts.map((workout) => workout.date))
  const [activeDate, setActiveDate] = React.useState(minDate(workouts))
  console.log("scheduleState", scheduleState)
  return (
    <React.Fragment>
      <Slider
        datesSet={datesSet}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      />
      <Workouts
        workoutDetails={workouts.filter((w) => w.date === activeDate)}
      />
    </React.Fragment>
  )
}

export default Schedule
