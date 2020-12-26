import React from 'react'
import { User } from '@prisma/client'
import { Card, Flex, Grid, jsx, Label } from 'theme-ui'
import { MdFitnessCenter, MdPermContactCalendar } from 'react-icons/md'
import { BsCardChecklist } from 'react-icons/bs'
import Icon from './Icon'

/** @jsx jsx */

interface IhomeProps {
  user: User
}

const Home: React.FC<IhomeProps> = ({ user }) => {
  return (
    <Grid>
      <Card>
        <Flex
          sx={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon size={3}>
            <MdFitnessCenter />
          </Icon>
          <Label p={2}>התאמנת החודש כבר 7 אימונים 🦾🦾</Label>
        </Flex>
      </Card>
      <Card>
        <Flex
          sx={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon size={3}>
            <MdPermContactCalendar />
          </Icon>
          <Label p={2}> באימון הבא ביום שני ה 13.6 ב- 17</Label>
        </Flex>
      </Card>
      <Card>
        <Flex
          sx={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon size={3}>
            <BsCardChecklist />
          </Icon>
          <Label p={2}>נשאר עוד {user.left} אימונים בכרטיסיה</Label>
        </Flex>
      </Card>
    </Grid>
  )
}

export default Home
