import React from 'react'
import { Button, Grid } from 'theme-ui'
import { WorkoutDetails } from './WorkoutDetails'
import { range } from '../lib/utils'
import { ArrayField, FormProvider, useForm } from 'react-hook-form'
import { Gender, WorkoutType } from '@prisma/client'
import gql from 'graphql-tag'
import { request } from 'graphql-request'
import { format } from 'date-fns'

export type Workout = {
   hour: string
   type: WorkoutType
   gender: Gender
}

export type DailySchedule = {
   date: string
   workout: Workout[]
}

export type WeeklySchedule = {
   weekly: DailySchedule[]
}
export type DatesField = Partial<ArrayField<DailySchedule, 'id'>>

export const CREATE_MANY_WORKOUTS = gql`
   mutation createManyWorkouts($manyWorkouts: [InputCreateWorkout!]!) {
      createManyWorkouts(data: $manyWorkouts)
   }
`

function createManyWorkouts(variables) {
   const url = process.env.API_URL || 'http://localhost:5000'
   return request(url, CREATE_MANY_WORKOUTS, variables)
}

export function createDefaultValue(dates: Date[]): WeeklySchedule {
   const hours = range(10, 21)
   const weeklySchedule = dates.map((d) => {
      return {
         date: format(d, 'yy-MM-dd'),
         workout: hours.map((h) => ({
            hour: h + ':00',
            type: WorkoutType['PERSONAL'],
            gender: Gender['FEMALE']
         }))
      }
   })
   return { weekly: weeklySchedule }
}

export const ScheduleForm: React.FC<{ dates: Date[] }> = ({ dates }) => {
   const defaultValues = createDefaultValue(dates)
   const methods = useForm({ defaultValues })
   const { handleSubmit } = methods

   const onSubmit = async (data: { weekly: DailySchedule[] }) => {
      const { weekly } = data
      const queryData = weekly.reduce((acc, day) => {
         const [date] = day.date.toString().split(',')
         day.workout.map((w) => {
            const { gender, type, hour: time } = w
            acc.push({
               date,
               time,
               gender,
               type
            })
         })
         return acc
      }, [])
      await createManyWorkouts({ manyWorkouts: queryData })
   }

   return (
      <FormProvider {...methods}>
         <Grid
            as="form"
            variant="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
               width: '45vw',
               gridTemplateRows: '1fr auto'
            }}
         >
            <WorkoutDetails />
            <Button type="submit">Submit</Button>
         </Grid>
      </FormProvider>
   )
}
