import React from 'react';

import { GlobalStyles } from '@styles/global';

import { Router } from './router';

const App: React.FC = () => {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
};

export { App };
