import { inspect } from '@xstate/inspect'
import React from 'react'
import Schedule from '../components/Schedule'
import getConfig from 'next/config'
import { NextPage } from 'next'

const { publicRuntimeConfig } = getConfig()

if (
  typeof window !== 'undefined' &&
  publicRuntimeConfig.NODE_ENV === 'development'
) {
  inspect({
    iframe: false,
  })
}

const SchedulePage: NextPage = () => {
  return <Schedule />
}

export default SchedulePage
