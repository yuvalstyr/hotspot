import * as React from 'react'
import { he } from 'date-fns/locale'
import DatePicker, { registerLocale } from 'react-datepicker'
import {
  useFieldArray,
  UseFieldArrayMethods,
  useFormContext,
} from 'react-hook-form'
import { Box, Button, Flex, Input, jsx } from 'theme-ui'
import { WorkoutDailyCard } from './WorkoutDailyCard'
import { createDefaultValue } from './ScheduleForm'
import { getIndexByDate } from '../lib/utils'

/** @jsx jsx */

const AddDay: React.FC<{
  insert: UseFieldArrayMethods['insert']
  fields: UseFieldArrayMethods['fields']
}> = ({ insert, fields }) => {
  const [startDate, setStartDate] = React.useState(new Date())

  function handleAppending() {
    console.log(fields)
    const defaultValue = createDefaultValue([startDate]).weekly[0]
    const index = getIndexByDate(fields, startDate)
    console.log('index', index)
    index >= 0 ? insert(index, defaultValue) : console.log('not good')
  }

  registerLocale('he', he)
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <Button type="button" onClick={() => handleAppending()}>
        הוסף
      </Button>
      <Box>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          locale="he"
          indexFormat="dd-MM-yy"
          customInput={<Input />}
        />
      </Box>
    </Flex>
  )
}

export const WorkoutDetails: React.FC = () => {
  const { control } = useFormContext()
  const { fields, insert, remove } = useFieldArray({
    control,
    name: 'weekly',
  })

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Box m={2}>
        <AddDay {...{ insert, fields }} />
      </Box>
      {fields.map((item, index) => {
        return (
          <Box key={item.id} m={2}>
            <WorkoutDailyCard {...{ item, index, remove }} />
          </Box>
        )
      })}
    </Flex>
  )
}
