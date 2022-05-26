import React from 'react';
import { Nav } from './Header/Nav';
import { TopBar } from './Header/TopBar';
import { HashLink } from 'react-router-hash-link';
import logo from '../../img/logo.png';
// import '../../css/header.css';

export const Header = ({ scrolled }) => {
  return (
    <>
      <TopBar scrolled={scrolled} />
      <header
        id="header"
        className={`fixed-top d-flex align-items-cente ${scrolled && 'header-scrolled'}`}
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <HashLink to="/#top" className="logo me-auto me-lg-0 header-logo-img">
            <img src={logo} alt="Jakub D." className="img-fluid" />
          </HashLink>
          <Nav />
        </div>
      </header>
    </>
  );
};
