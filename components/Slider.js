import React from "react"
import { mdiArrowLeftBoldCircle, mdiArrowRightBoldCircle } from "@mdi/js"
import Icon from "@mdi/react"
import { Flex, jsx } from "theme-ui"
import { DayAvatar } from "./DayAvatar"
/** @jsx jsx */
export const Slider = ({ datesSet, activeDate, setActiveDate }) => {
  return (
    <Flex
      sx={{
        paddingBottom: "1rem",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Icon
        path={mdiArrowRightBoldCircle}
        size={1.5}
        sx={{ color: "secondary", alignSelf: "center" }}
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
        sx={{ color: "secondary", alignSelf: "center" }}
      />
    </Flex>
  )
}
