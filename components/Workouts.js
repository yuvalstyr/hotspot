import React from "react"
import { Workout } from "./Workout"
import { ScheduleMachineStateContext } from "../machine/schedule"

export const Workouts = ({ activeDate }) => {
  const scheduleState = React.useContext(ScheduleMachineStateContext)
  const { weeklyWorkouts } = scheduleState.context
  React.useEffect(() => {
    console.log("changed")
  }, [weeklyWorkouts])
  const workoutDetails = weeklyWorkouts.filter((w) => w.date === activeDate)
  return workoutDetails.map((workout) => (
    <Workout key={workout.id} workout={workout} />
  ))
}
