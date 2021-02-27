import * as React from 'react'
import { BiFemale, BiMale } from 'react-icons/bi'
import {
  Button,
  Field,
  Flex,
  Grid,
  Heading,
  Label,
  Radio,
  Text,
} from 'theme-ui'
import { useForm } from 'react-hook-form'
import gql from 'graphql-tag'
import { request } from 'graphql-request'
import { User } from '@prisma/client'

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
    signup(name: $name, phone: $phone, gender: $gender, email: $email) {
      __typename
      id
    }
  }
`

function signup(variables) {
  return request(process.env.API_URL, SIGNUP, variables)
}

interface signupProps {
  user: User
  handleSignup: React.Dispatch<React.SetStateAction<string>>
}

const SignUp: React.FC<signupProps> = ({ user, handleSignup }) => {
  const { register, handleSubmit, errors } = useForm<Inputs>()

  const onSubmit = async (data) => {
    const { name, phone, gender } = data
    let email
    if (!user) {
      email = 'yuvalstyr@gmail.com'
    } else {
      email = user.email
    }
    await signup({ name, phone, gender, email })
    handleSignup('logged')
  }
  return (
    <Grid
      backgroundColor="muted"
      as="form"
      variant="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading>חדש אצלנו, עוד כמה פרטים ומתחילים</Heading>
      <Field
        label="שם"
        name="name"
        defaultValue=""
        ref={register({ required: true, pattern: /^[\u0590-\u05FF ,.'-]+$/ })}
      />
      {errors.name && (
        <Text
          sx={{
            fontWeight: 'bold',
            border: (t) => `solid 1px ${t.colors.primary}`,
          }}
        >
          שם בעברית בבקשה
        </Text>
      )}
      <Field
        label="פלאפון"
        name="phone"
        defaultValue=""
        ref={register({ required: true, pattern: /^05[2-7][0-9]{7}/i })}
      />
      {errors.phone && (
        <Text
          sx={{
            fontWeight: 'bold',
            border: (t) => `solid 1px ${t.colors.primary}`,
          }}
        >
          המספר תקין? 🤔🤔
        </Text>
      )}

      <Flex
        sx={{
          height: '5rem',
        }}
      >
        <Label>
          <Radio
            name="gender"
            value="male"
            ref={register({ required: true })}
          />
          <BiMale sx={{ height: '100%', width: '100% ' }} />
        </Label>
        <Label>
          <Radio
            name="gender"
            value="female"
            ref={register({ required: true })}
          />
          <BiFemale sx={{ height: '100%', width: '100%' }} />
        </Label>
      </Flex>

      <Button type="submit">יאללה להתאמן</Button>
    </Grid>
  )
}

export default SignUp
