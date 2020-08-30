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

const Schedule = () => {
  const scheduleState = React.useContext(ScheduleMachineStateContext)
  const { weeklyWorkouts } = scheduleState.context
  const datesSet = new Set(weeklyWorkouts.map((workout) => workout.date))
  const [activeDate, setActiveDate] = React.useState(minDate(weeklyWorkouts))
  return (
    <React.Fragment>
      <Slider
        datesSet={datesSet}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      />
      <Workouts
        workoutDetails={weeklyWorkouts.filter((w) => w.date === activeDate)}
      />
      <pre style={{ color: "white", direction: "ltr" }}>
        {JSON.stringify(scheduleState.value, null, 2)}
      </pre>
      <pre style={{ color: "white", direction: "ltr" }}>
        {JSON.stringify(scheduleState.context, null, 2)}
      </pre>
    </React.Fragment>
  )
}

export default Schedule
