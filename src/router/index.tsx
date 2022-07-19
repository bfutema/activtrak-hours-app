import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@pages/Main/Home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
