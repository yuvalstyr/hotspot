import { BoxProps, Center, Icon, Text, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { BsCardChecklist } from 'react-icons/bs'
import { IconType } from 'react-icons/lib'
import { MdFitnessCenter, MdPermContactCalendar } from 'react-icons/md'
import { User } from '../generates/graphql'

interface IHomeProps {
   user: User
}

const Card: React.FC<{
   ReactIcon: IconType
   CardText: string
   props?: BoxProps
}> = ({ ReactIcon, CardText, ...props }) => {
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
// TODO build a dashboard component
const Home: React.FC<IHomeProps> = ({ user }) => {
   return (
      <VStack align="stretch" pt="10px">
         <Card
            ReactIcon={MdFitnessCenter}
            CardText={`התאמנת החודש כבר ${user.remainsClasses} אימונים 🦾🦾`}
         />
         <Card
            ReactIcon={BsCardChecklist}
            CardText={`נשאר עוד ${user.remainsClasses} אימונים בכרטיסיה`}
         />
         <Card
            ReactIcon={MdPermContactCalendar}
            CardText={`באימון הבא ביום שני ה 13.6 ב- 17`}
         />
      </VStack>
   )
}

export default Home
