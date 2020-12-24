import React from 'react'
import getConfig from 'next/config'
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
  const { publicRuntimeConfig } = getConfig()
  const { data, error } = useSWR(userQuery, (query) =>
    request(publicRuntimeConfig.API_URL, query),
  )
  console.log('data', data)
  return <div></div>
}

export default Home
