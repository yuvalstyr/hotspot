import { format, parse } from 'date-fns'
import React from 'react'
import { Label, Grid, Input, Close } from 'theme-ui'
import he from 'date-fns/locale/he'
import { WorkoutHourInput } from './WorkoutHourInput'
import { DatesField } from './ScheduleForm'
import { useFormContext } from 'react-hook-form'

export const WorkoutDailyCard: React.FC<{
  item: DatesField
  index: number
  remove: (index?: number | number[]) => void
}> = ({ item, index, remove }) => {
  const [isOpened, setIsOpened] = React.useState(false)
  const { register } = useFormContext()
  return (
    <Grid columns={['1fr 1fr']} backgroundColor="muted">
      <Input
        name={`weekly[${index}].date`}
        ref={register()}
        defaultValue={item.date}
        sx={{ display: 'none' }}
      />
      <Label onClick={() => setIsOpened(!isOpened)}>
        {format(parse(item.date, 'yy-MM-dd', new Date()), 'EEEE', {
          locale: he,
        })}
      </Label>
      <Label onClick={() => setIsOpened(!isOpened)}>{item.date}</Label>
      <Close onClick={() => remove(index)} sx={{ justifySelf: 'end' }} />
      <WorkoutHourInput hourIndex={index} isOpened={isOpened} />
    </Grid>
  )
}
