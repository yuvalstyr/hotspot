import React from 'react'
import { request, gql } from 'graphql-request'
import useSWR from 'swr'

const userQuery = gql`
  query users {
    users {
      id
      name
    }
  }
`

function Home() {
  const { data, error } = useSWR(userQuery, (query) =>
    request(process.env.API_URL, query),
  )
  console.log('data', data)
  return <div></div>
}

export default Home
