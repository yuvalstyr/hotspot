import React from 'react';
import { Flex, NavLink, jsx } from 'theme-ui';
import { useRouter } from 'next/router';

/** @jsx jsx */

export const Nav = () => {
  const router = useRouter();

  return (
    <Flex as="nav" sx={{ backgroundColor: 'secondary' }}>
      <NavLink p={2} sx={{ variant: 'links' }}>
        אימונים
      </NavLink>
      <NavLink
        p={2}
        onClick={() => {
          router.push('/schedule');
        }}
        sx={{ variant: 'links' }}
      >
        הזנת אימון
      </NavLink>
      <NavLink p={2} sx={{ variant: 'links' }}>
        תשלומים
      </NavLink>
    </Flex>
  );
};
