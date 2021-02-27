import React from 'react'
import { User } from '@prisma/client'
import { Grid, Center, Text, Icon, BoxProps, VStack } from '@chakra-ui/react'
import { MdFitnessCenter, MdPermContactCalendar } from 'react-icons/md'
import { BsCardChecklist } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'

interface IhomeProps {
  user: User
}

const Card: React.FC<{
  ReactIcon: IconType
  CardText: string
  props?: BoxProps
}> = ({ ReactIcon, CardText, ...props }) => {
  console.log('props', props)
  return (
    <Center
      {...props}
      boxShadow="0 12px 24px 0 rgba(0,0,0,0.09)"
      bg="whiteAlpha.600"
      borderRadius="10px"
      h="10%"
    >
      <Icon size={3} as={ReactIcon} />
      <Text>{CardText}</Text>
    </Center>
  )
}

const Home: React.FC<IhomeProps> = ({ user }) => {
  return (
    <VStack align="stretch" pt="10px">
      <Card
        ReactIcon={MdFitnessCenter}
        CardText={'התאמנת החודש כבר 7 אימונים 🦾🦾'}
      />
      <Card
        ReactIcon={BsCardChecklist}
        CardText={`נשאר עוד ${user.left} אימונים בכרטיסיה`}
      />
      <Card
        ReactIcon={MdPermContactCalendar}
        CardText={`באימון הבא ביום שני ה 13.6 ב- 17`}
      />
    </VStack>
  )
}

export default Home
