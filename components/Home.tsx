import React from 'react'
import { request, gql } from 'graphql-request'
import { User } from '@prisma/client'
import { Card, Flex, Grid, jsx, Label } from 'theme-ui'
import { MdFitnessCenter, MdPermContactCalendar } from 'react-icons/md'
import { BsCardChecklist } from 'react-icons/bs'
import Icon from '../components/NavIcon'

/** @jsx jsx */

const userQuery = gql`
  query users {
    users {
      id
      name
    }
  }
`

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
          <Icon>
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
          <Icon>
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
          <Icon>
            <BsCardChecklist />
          </Icon>
          <Label p={2}>נשאר עוד 6 אימונים בכרטיסיה</Label>
        </Flex>
      </Card>
    </Grid>
  )
}

export default Home
