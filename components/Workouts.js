import React from "react"
import { Workout } from "./Workout"

export const Workouts = ({ workoutDetails }) => {
  return workoutDetails.map((workout) => (
    <Workout key={workout.id} workout={workout} />
  ))
}
