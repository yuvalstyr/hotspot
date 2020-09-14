import React from "react"
import { Box, Text } from "theme-ui"
export const TrainersList = ({ trainees }) => {
  if (!trainees.length) return <div />
  return trainees.map((trainee) => {
    const { firstName, lastName } = trainee
    return (
      <Box key={trainee.id}>
        <li>
          <Text color="primary">{`${firstName} ${lastName}`}</Text>
        </li>
      </Box>
    )
  })
}
