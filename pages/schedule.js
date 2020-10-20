import { inspect } from '@xstate/inspect';
import React from 'react';
import Schedule from '../components/Schedule';

if (typeof window !== 'undefined') {
  inspect({
    iframe: false,
  });
}

const schedule = () => {
  return <Schedule />;
};

export default schedule;
