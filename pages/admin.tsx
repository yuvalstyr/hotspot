import { NextPage } from 'next'
import React from 'react'
import { Box, Card, Checkbox, Flex, Grid, jsx } from 'theme-ui'
import DatePicker, { registerLocale } from 'react-datepicker'
import { addMonths } from 'date-fns'

import he from 'date-fns/locale/he'

/** @jsx jsx */
const Admin: NextPage = () => {
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(null)
  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  registerLocale('he', he)
  return (
    <Grid m={3}>
      <Card p={5} sx={{ height: '50vh' }}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          locale="he"
          selectsRange
          inline
        />
      </Card>
    </Grid>
    // <Box as="form">
    //   <Checkbox defaultChecked={true} />
    // </Box>
  )
}

export default Admin
