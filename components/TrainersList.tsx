import { User } from '@prisma/client'
import React from 'react'
import { Box, Text } from 'theme-ui'

const TrainersList: React.FunctionComponent<{
  trainees: User[]
}> = ({ trainees }) => {
  if (!trainees) throw new Error('no trainees')
  if (!trainees?.length) return <div />
  const traineesList = trainees.map((trainee) => {
    const { firstName, lastName, id } = trainee
    return (
      <Box key={id}>
        <li>
          <Text color="primary">{`${firstName} ${lastName}`}</Text>
        </li>
      </Box>
    )
  })
  return <React.Fragment>{traineesList}</React.Fragment>
}

export default TrainersList
