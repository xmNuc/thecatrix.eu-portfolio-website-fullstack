import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import navImg from '../../../img/navopen.png';
import navImgClose from '../../../img/navclose.png';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../constants/actionTypes';
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

export const Nav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [active, setActive] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 991;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const addActiveClass = () => {
    active ? setActive(false) : setActive(true);
  };
  const handleNavMenu = () => {
    navMenu ? setNavMenu(false) : setNavMenu(true);
  };

  return (
    <>
      <nav id="navbar" className={isMobile && active ? 'navbar-mobile' : 'navbar'}>
        <ul>
          <li>
            <HashLink to="/#top" smooth className={isMobile ? 'navbar-mobile-link' : 'navbar'}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="/#about" smooth className={isMobile ? 'navbar-mobile-link' : ''}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="/#projects" className={isMobile ? 'navbar-mobile-link' : ''}>
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink to="/#courses" smooth className={isMobile ? 'navbar-mobile-link' : ''}>
              Courses
            </HashLink>
          </li>
          <li>
            <HashLink to="/#post-production" className={isMobile ? 'navbar-mobile-link' : ''}>
              Video Edits
            </HashLink>
          </li>
          <li>
            <HashLink to="/#footer" className={isMobile ? 'navbar-mobile-link' : ''}>
              Contact
            </HashLink>
          </li>
          <li className={isMobile ? 'navbar-mobile-link login-bar' : 'login-bar'}>
            {user ? (
              <>
                <div className="profile">
                  <HashLink to="/post/#top" style={{ paddingLeft: 0 }}>
                    <div alt={user.result.name} src={user.result.imageUrl}>
                      <div className="userName">{user.result.name}</div>
                    </div>
                  </HashLink>
                </div>
                <HashLink
                  to="/"
                  id="login-btn"
                  className={isMobile ? 'navbar-mobile-link' : 'd-none d-lg-flex'}
                  onClick={logout}
                >
                  Logout
                </HashLink>
              </>
            ) : (
              <HashLink
                to="/auth"
                id="login-btn"
                className={isMobile ? 'navbar-mobile-link' : 'd-none d-lg-flex'}
              >
                Login
              </HashLink>
            )}
          </li>
        </ul>
        <div className="mobile-nav-toggle" onClick={addActiveClass}>
          {active ? (
            <img src={navImgClose} alt="mobile navigation close" onClick={handleNavMenu} />
          ) : (
            <img src={navImg} alt="mobile navigation open" onClick={handleNavMenu} />
          )}
        </div>
      </nav>
    </>
  );
};
