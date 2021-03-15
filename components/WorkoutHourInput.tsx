import React from 'react'
import { Collapse } from 'react-collapse'
import { Label, Card, Grid, Select, Input, Box } from 'theme-ui'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { createDefaultValue } from './ScheduleForm'

export const WorkoutHourInput: React.FC<{
   hourIndex: number
   isOpened: boolean
}> = ({ hourIndex, isOpened }) => {
   const { control, register } = useFormContext()
   //   todo add remove and append buttons
   const { fields, remove, append } = useFieldArray({
      control,
      name: `weekly[${hourIndex}].workout`
   })
   if (!fields.length) {
      const { workout } = createDefaultValue([new Date()]).weekly[0]
      workout.map((w) => append(w))
   }
   return (
      <Box sx={{ gridColumn: '1/span 2' }}>
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
                              defaultValue={item.hour}
                              sx={{ display: 'none' }}
                           />
                           <Select
                              name={`weekly[${hourIndex}].workout[${k}].gender`}
                              ref={register({ required: true })}
                              defaultValue={item.gender}
                           >
                              <option value="FEMALE"> נשים</option>
                              <option value="MALE">גברים</option>
                           </Select>
                           <Select
                              name={`weekly[${hourIndex}].workout[${k}].type`}
                              ref={register({ required: true })}
                              defaultValue={item.type}
                           >
                              <option value={'PERSONAL'}>אישי</option>
                              <option value={'TEAM'}>קבוצה</option>
                           </Select>
                        </Grid>
                     </Card>
                  )
               })}
            </Grid>
         </Collapse>
      </Box>
   )
}
