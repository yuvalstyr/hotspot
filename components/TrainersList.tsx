import { User } from '@prisma/client'
import React from 'react'
import { Box, Text } from 'theme-ui'

const TrainersList: React.FunctionComponent<{
   trainees: User[] | undefined
}> = ({ trainees }) => {
   if (!trainees) throw new Error('no trainees')
   if (!trainees?.length) return <div />
   const traineesList = trainees.map((trainee) => {
      const { name, id } = trainee
      return (
         <Box key={id}>
            <li>
               <Text color="primary">{`name`}</Text>
            </li>
         </Box>
      )
   })
   return <React.Fragment>{traineesList}</React.Fragment>
}

export default TrainersList
