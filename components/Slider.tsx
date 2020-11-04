/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Dispatch, SetStateAction } from 'react'
import { mdiArrowLeftBoldCircle, mdiArrowRightBoldCircle } from '@mdi/js'
import Icon from '@mdi/react'
import { Flex, jsx } from 'theme-ui'
import DayAvatar from './DayAvatar'

/** @jsx jsx */

interface props {
  datesSet: Set<Date>
  activeDate: string
  setActiveDate: Dispatch<SetStateAction<string>>
}

export const Slider: React.FC<props> = ({
  datesSet,
  activeDate,
  setActiveDate,
}) => {
  return (
    <Flex
      sx={{
        paddingBottom: '1rem',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Icon
        path={mdiArrowRightBoldCircle}
        size={1.5}
        sx={{ color: 'secondary', alignSelf: 'center' }}
      />

      {Array.from(datesSet).map((date, index) => (
        <DayAvatar
          date={date}
          key={index}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
        />
      ))}

      <Icon
        path={mdiArrowLeftBoldCircle}
        size={1.5}
        sx={{ color: 'secondary', alignSelf: 'center' }}
      />
    </Flex>
  )
}
