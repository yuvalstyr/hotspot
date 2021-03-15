/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Dispatch, SetStateAction } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { Flex } from 'theme-ui'
import DayAvatar from './DayAvatar'
import NavIcon from './Icon'

interface props {
   datesSet: Set<string>
   activeDate: string
   setActiveDate: Dispatch<SetStateAction<string>>
}

export const Slider: React.FC<props> = ({ datesSet, activeDate, setActiveDate }) => {
   return (
      <Flex
         sx={{
            paddingBottom: '1rem',
            justifyContent: 'space-between',
            width: '100%'
         }}
      >
         <NavIcon size={3} sx={{ color: 'primary', alignSelf: 'center' }}>
            <FaArrowCircleRight />
         </NavIcon>

         {Array.from(datesSet).map((date, index) => (
            <DayAvatar
               date={date}
               key={index}
               activeDate={activeDate}
               setActiveDate={setActiveDate}
            />
         ))}

         <NavIcon size={3} sx={{ color: 'primary', alignSelf: 'center' }}>
            <FaArrowCircleLeft />
         </NavIcon>
      </Flex>
   )
}
