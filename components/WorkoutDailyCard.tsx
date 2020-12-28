import { format } from 'date-fns'
import React from 'react'
import { Label, Grid, Input } from 'theme-ui'
import he from 'date-fns/locale/he'
import { WorkoutHourInput } from './WorkoutHourInput'
import { ArrayField, useFormContext } from 'react-hook-form'
import { DailySchedule } from './ScheduleForm'

export const WorkoutDailyCard: React.FC<{
  item: Partial<ArrayField<DailySchedule, 'id'>>
  index: number
}> = ({ item, index }) => {
  const [isOpened, setIsOpened] = React.useState(false)
  const { register } = useFormContext()
  return (
    <Grid key={format(item.date, "yyyy-MM-dd'T'HH:mm")} backgroundColor="muted">
      <Input
        name={`weekly[${index}].date`}
        ref={register()}
        defaultValue={item.date.toLocaleString()}
        sx={{ display: 'none' }}
      />
      <Label onClick={() => setIsOpened(!isOpened)}>
        {format(item.date, 'EEEE', { locale: he })}
      </Label>
      <WorkoutHourInput hourIndex={index} isOpened={isOpened} />
    </Grid>
  )
}
