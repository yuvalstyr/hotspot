import React from 'react'
import { Label, jsx } from 'theme-ui'
import { range } from '../pages/admin'

/** @jsx jsx */
interface IDayProps {
  date: string
}
export const WorkoutDay: React.FC<IDayProps> = ({ date }) => {
  const hours = range(10, 21)
  return (
    <React.Fragment>
      {hours.map((h) => (
        <Label key={h}>{h}</Label>
      ))}
    </React.Fragment>
  )
}
