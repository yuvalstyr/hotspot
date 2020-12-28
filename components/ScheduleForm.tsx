import React from 'react'
import { Button, Grid } from 'theme-ui'
import { WorkoutDetails } from './WorkoutDetails'
import { range } from '../lib/utils'
import { FormProvider, useForm } from 'react-hook-form'
import { Gender, WorkoutType } from '@prisma/client'

export type Workout = {
  hour: string
  type: WorkoutType
  gender: Gender
}

export type DailySchedule = {
  date: Date
  workout: Workout[]
}

export type WeeklySchedule = {
  weekly: DailySchedule[]
}

function createDefaultValue(dates: Date[]): WeeklySchedule {
  const hours = range(10, 21)
  const weeklySchedule = dates.map((d) => {
    return {
      date: d,
      workout: hours.map((h) => ({
        hour: h + ':00',
        type: WorkoutType['PERSONAL'],
        gender: Gender['MALE'],
      })),
    }
  })
  return { weekly: weeklySchedule }
}

export const ScheduleForm: React.FC<{ dates: Date[] }> = ({ dates }) => {
  const defaultValues = createDefaultValue(dates)
  const methods = useForm({ defaultValues })
  const { handleSubmit } = methods
  const onSubmit = (data) => console.log('data', data)
  return (
    <FormProvider {...methods}>
      <Grid
        as="form"
        variant="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          gridTemplateRows: '1fr auto',
        }}
      >
        <WorkoutDetails />
        <Button type="submit">Submit</Button>
      </Grid>
    </FormProvider>
  )
}
