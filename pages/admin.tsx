import he from 'date-fns/locale/he'
import { NextPage } from 'next'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { Box, Card, Grid, jsx } from 'theme-ui'
import { format } from 'date-fns'
import { Collapse } from 'react-collapse'
import { WorkoutDay } from '../components/WorkoutDay'

// todo move to lib folder
const getDatesBetweenDates = (startDate: Date, endDate: Date): Date[] => {
  let dates = []
  //to avoid modifying the original date
  const theDate = new Date(startDate)
  while (theDate <= endDate) {
    dates = [...dates, new Date(theDate)]
    theDate.setDate(theDate.getDate() + 1)
  }
  return dates
}
export function range(start: number, end: number): number[] {
  return Array(end - start + 1)
    .fill(1)
    .map((_, idx) => start + idx)
}

/** @jsx jsx */
const Admin: NextPage = () => {
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(null)
  const [isOpened, setIsOpened] = React.useState(false)
  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  registerLocale('he', he)
  return (
    <Card m={3} p={5} sx={{ overflow: 'hidden auto' }}>
      <Grid>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          locale="he"
          selectsRange
          inline
        />
        {getDatesBetweenDates(startDate, endDate).map((day) => {
          console.log('day', format(day, "yyyy-MM-dd'T'HH:mm"))
          return (
            <React.Fragment key={format(day, "yyyy-MM-dd'T'HH:mm")}>
              <Box onClick={() => setIsOpened(!isOpened)}>
                {format(day, 'eo', { locale: he })}
              </Box>
              <Collapse isOpened={isOpened}>
                <WorkoutDay date={format(day, "yyyy-MM-dd'T'HH:mm")} />
              </Collapse>
            </React.Fragment>
          )
        })}
      </Grid>
    </Card>
    // <Box as="form">
    //   <Checkbox defaultChecked={true} />
    // </Box>
  )
}

export default Admin
