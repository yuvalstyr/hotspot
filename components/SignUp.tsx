import { ISession } from '@auth0/nextjs-auth0/dist/session/session'
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { request } from 'graphql-request'
import gql from 'graphql-tag'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { BiFemale, BiMale } from 'react-icons/bi'
import { UserCreateInput } from '../generates/graphql'

type Inputs = {
  name: string
  phone: string
  gender: string
}

export const SIGNUP = gql`
  mutation signup(
    $name: String!
    $phone: String!
    $gender: String!
    $email: String!
  ) {
    createUser(
      data: { name: $name, phone: $phone, gender: $gender, email: $email }
    ) {
      id
    }
  }
`

function signup(variables: UserCreateInput) {
  const url = process.env.API_URL || 'http://localhost:5000'
  return request(url, SIGNUP, variables)
}

interface signupProps {
  user: ISession['user']
}

const SignUp: React.FC<signupProps> = ({ user }) => {
  const { register, handleSubmit, errors } = useForm<Inputs>()

  const onSubmit = async (data: UserCreateInput) => {
    const { name, phone, gender } = data
    const email = user.email
    await signup({ name, phone, gender, email })
  }
  return (
    <Center>
      <SimpleGrid
        bg="primary"
        m="0.5rem 0.5rem"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        h="50vh"
      >
        <Text color="white">חדש אצלנו, עוד כמה פרטים ומתחילים</Text>
        <FormControl
          label="שם"
          defaultValue=""
          isInvalid={Boolean(errors.name)}
        >
          <FormLabel>שם</FormLabel>
          <Input
            name="name"
            ref={register({
              required: true,
              pattern: /^[\u0590-\u05FF ,.'-]+$/,
            })}
          />
          <FormErrorMessage>שם בעברית בבקשה</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.phone)}>
          <FormLabel>פלאפון</FormLabel>
          <Input
            name="phone"
            defaultValue=""
            ref={register({ required: true, pattern: /^05[2-7][0-9]{7}/i })}
          />
          <FormErrorMessage> המספר תקין? 🤔🤔</FormErrorMessage>
        </FormControl>
        <RadioGroup name="gender" defaultValue="male">
          <Stack direction="row" justify="space-around">
            <VStack>
              <Icon as={BiMale} boxSize={12} color="white" />
              <Radio value="male" ref={register({ required: true })} />
            </VStack>
            <VStack>
              <Icon as={BiFemale} boxSize={12} color="white" />
              <Radio value="female" ref={register({ required: true })} />
            </VStack>
          </Stack>
        </RadioGroup>

        <Button type="submit" bg="secondary" color="white">
          יאללה להתאמן
        </Button>
      </SimpleGrid>
    </Center>
  )
}

export default SignUp
