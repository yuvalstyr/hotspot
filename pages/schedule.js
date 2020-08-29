import { gql, useQuery } from "@apollo/client"
import React from "react"
import { Spinner } from "theme-ui"
import DisplayError from "../components/DisplayError"
import Schedule from "../components/Schedule"
import { ScheduleMachineProvider } from "../states/schedule"

//TODO add args to the query that filter workout to the current week
const workouts = gql`
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
    // <div>
    <ScheduleMachineProvider>
      <Schedule workouts={data.workoutsPerWeek} />
    </ScheduleMachineProvider>
    //   <pre style={{ color: "white", direction: "ltr" }}>
    //     {JSON.stringify(current.value, null, 2)}
    //   </pre>
    //   <pre style={{ color: "white", direction: "ltr" }}>
    //     {JSON.stringify(current.context, null, 2)}
    //   </pre>
    // </div>
  )
}

export default schedule
