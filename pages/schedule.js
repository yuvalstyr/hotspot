import { gql, useQuery } from "@apollo/client"
import React from "react"
import { Spinner } from "theme-ui"
import DisplayError from "../components/DisplayError"
import Schedule from "../components/Schedule"
import { ScheduleMachineProvider } from "../machine/schedule"

//TODO add args to the query that filter workout to the current week
export const workouts = gql`
  query {
    workoutsPerWeek {
      id
      status
      type
      date
      time
      trainees {
        id
        firstName
        lastName
      }
    }
  }
`

const schedule = () => {
  const { data, loading, error } = useQuery(workouts)
  if (loading) return <Spinner />
  if (error) return <DisplayError error={error} />
  return (
    <ScheduleMachineProvider data={data.workoutsPerWeek}>
      <Schedule />
    </ScheduleMachineProvider>
  )
}

export default schedule
