import React from 'react';
import { format } from 'date-fns';
import heLocale from 'date-fns/locale/he';
import { Button, jsx } from 'theme-ui';

/** @jsx jsx */

export const DayAvatar = ({ date, activeDate, setActiveDate }) => {
  const firstLetter = format(new Date(date), 'EEEEE', { locale: heLocale });
  const shortDate = format(new Date(date), 'dd/MM');

  return (
    <div
      key={date}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>{shortDate}</div>
      <Button
        sx={{
          width: '40px',
          height: '40px',
          display: 'flex',
          fontSize: '1.25rem',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundColor: date === activeDate ? 'highlight' : 'primary',
        }}
        onClick={() => setActiveDate(date)}
      >
        {firstLetter}
      </Button>
    </div>
  );
};
