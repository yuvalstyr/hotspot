/* eslint-disable react/jsx-props-no-spreading */
import { validate } from 'graphql'
import React from 'react'
import { BiFemale, BiMale } from 'react-icons/bi'
import {
  Button,
  Field,
  Flex,
  Grid,
  Heading,
  jsx,
  Label,
  Radio,
  Text,
} from 'theme-ui'
import { useForm } from 'react-hook-form'
/** @jsx jsx */

type Inputs = {
  name: string
  phone: string
  gender: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function SignUp() {
  const { register, handleSubmit, errors } = useForm<Inputs>()
  const onSubmit = (data) => console.log(data)
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
