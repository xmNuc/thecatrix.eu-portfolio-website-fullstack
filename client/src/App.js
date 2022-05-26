import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreationArea } from './components/CreationArea/CreationArea';
import { Auth } from './components/CreationArea/Auth/Auth';
import { NucPortfolio } from './components/NucPortfolio/NucPortfolio';
import './css/importAll.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NucDetails } from './components/NucPortfolio/Main/Posts/NucDetails';

export const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 100);
    });
  });
  // console.log(window.scrollY);
  return (
    <>
      <Routes>
        <Route path="/" element={<NucPortfolio scrolled={scrolled} />} />
        <Route path="/post" element={<CreationArea scrolled={scrolled} />} />
        <Route path="/post/:id" element={<NucDetails scrolled={scrolled} />} />
        <Route path="/auth" element={<Auth scrolled={scrolled} />} />
        <Route path="*" element={<NucPortfolio scrolled={scrolled} />} />
      </Routes>
    </>
  );
};
