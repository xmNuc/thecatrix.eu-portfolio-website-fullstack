import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Hero } from './Hero//Hero';

export const NucPortfolio = ({ scrolled }) => {
  return (
    <>
      <Header scrolled={scrolled} />
      <Hero />
      <Main />
    </>
  );
};
