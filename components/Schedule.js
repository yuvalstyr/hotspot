import { format, min } from "date-fns"
import React from "react"
import { Slider } from "./Slider"
import { Workouts } from "./Workouts"
import { scheduleMachine } from "../machine/scheduleMachine"
import { useMachine } from "@xstate/react"

const minDate = (workouts) => {
  const minDate = workouts?.reduce(
    (result, current) => min([new Date(current.date), result]),
    new Date(workouts[0]?.date)
  )

  return minDate ? format(minDate, "MM/dd/yy") : null
}

const Schedule = () => {
  const [current] = useMachine(scheduleMachine)
  const { weeklyWorkouts } = current.context
  const datesSet = new Set(weeklyWorkouts?.map((workout) => workout.date))
  const [activeDate, setActiveDate] = React.useState(null)

  React.useEffect(() => {
    setActiveDate(minDate(weeklyWorkouts))
  }, [weeklyWorkouts])

  return (
    <React.Fragment>
      <Slider
        datesSet={datesSet}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      />
      <Workouts activeDate={activeDate} />
    </React.Fragment>
  )
}

export default Schedule
