import React, { Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'
import heLocale from 'date-fns/locale/he'
import { Button, jsx } from 'theme-ui'
import { uuid } from 'uuidv4'

/** @jsx jsx */

interface props {
  date: string
  activeDate: string
  setActiveDate: Dispatch<SetStateAction<string>>
}

const DayAvatar: React.FC<props> = ({ date, activeDate, setActiveDate }) => {
  const firstLetter = format(new Date(date), 'EEEEE', { locale: heLocale })
  const shortDate = format(new Date(date), 'dd/MM')
  const fullDate = format(new Date(date), 'MM/dd/yy')

  return (
    <div
      key={uuid()}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>{shortDate}</div>
      <Button
        sx={{
          width: '40px',
          height: '40px',
          display: 'flex',
          fontSize: '1.25rem',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundColor: fullDate === activeDate ? 'highlight' : 'primary',
        }}
        onClick={() => setActiveDate(fullDate)}
      >
        {firstLetter}
      </Button>
    </div>
  )
}

export default DayAvatar
