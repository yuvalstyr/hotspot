import React from 'react'
import { Box, Flex, jsx } from 'theme-ui'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { WorkoutDailyCard } from './WorkoutDailyCard'

/** @jsx jsx */

export const WorkoutDetails: React.FC = () => {
  const { control } = useFormContext()
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'weekly',
  })

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      {fields.map((item, index) => {
        return (
          <Box key={item.id} m={2}>
            <WorkoutDailyCard {...{ item, index }} />
          </Box>
        )
      })}
    </Flex>
  )
}
