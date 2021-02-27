import he from 'date-fns/locale/he'
import { NextPage } from 'next'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
// import DatePicker from '@bit/nexxtway.react-rainbow.date-picker'
import { Card, Flex } from 'theme-ui'
import { getDatesBetweenDates } from '../lib/utils'
import { ScheduleForm } from './ScheduleForm'

export const WeeklySchedule: NextPage = () => {
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(null)

  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  registerLocale('he', he)
  return (
    <Card
      m={3}
      sx={{
        overflow: 'hidden auto',
        width: ['80vw', '50vw'],
        display: 'grid',
        justifyContent: 'center',
        gridTemplateRows: 'auto 1fr',
      }}
    >
      <Flex sx={{ justifyContent: 'center' }}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          locale="he"
          selectsRange
          inline
        />
      </Flex>
      {startDate && endDate && (
        <ScheduleForm dates={getDatesBetweenDates(startDate, endDate)} />
      )}
    </Card>
  )
}
