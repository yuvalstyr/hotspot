import React from 'react'
import { Collapse } from 'react-collapse'
import { Label, Card, Grid, Select, Input } from 'theme-ui'
import { useFieldArray, useFormContext } from 'react-hook-form'

export const WorkoutHourInput: React.FC<{
  hourIndex: number
  isOpened: boolean
}> = ({ hourIndex, isOpened }) => {
  const { control, register } = useFormContext()
  //   todo add remove and append buttons
  const { fields, remove, append } = useFieldArray({
    control,
    name: `weekly[${hourIndex}].workout`,
  })
  return (
    <Collapse isOpened={isOpened}>
      <Grid>
        {fields.map((item, k) => {
          return (
            <Card key={item.id} sx={{ border: 'solid 1px #A2ABAB' }}>
              <Grid columns={3}>
                <Label sx={{ alignItems: 'center' }}>{item.hour}</Label>
                <Input
                  name={`weekly[${hourIndex}].workout[${k}].hour`}
                  ref={register()}
                  defaultValue={item.date}
                  sx={{ display: 'none' }}
                />
                <Select
                  name={`weekly[${hourIndex}].workout[${k}].gender`}
                  ref={register({ required: true })}
                  defaultValue={item.gender}
                >
                  <option> נשים</option>
                  <option>גברים</option>
                </Select>
                <Select
                  name={`weekly[${hourIndex}].workout[${k}].type`}
                  ref={register({ required: true })}
                  defaultValue={item.type}
                >
                  <option>אישי</option>
                  <option>קבוצה</option>
                </Select>
              </Grid>
            </Card>
          )
        })}
      </Grid>
    </Collapse>
  )
}
