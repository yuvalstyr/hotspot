import { inspect } from '@xstate/inspect';
import React from 'react';
import Schedule from '../components/Schedule';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

if (
  typeof window !== 'undefined' &&
  publicRuntimeConfig.NODE_ENV === 'development'
) {
  inspect({
    iframe: false,
  });
}

const schedule = () => {
  return <Schedule />;
};

export default schedule;
