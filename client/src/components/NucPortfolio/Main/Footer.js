import React from 'react';
import { HashLink } from 'react-router-hash-link';
// import '../../../css/footer.css';
// import '../../../css/header.css';
export const Fotter = () => {
  return (
    <>
      <section id="footer" className="footer footer-bg">
        <div className="container-xxl justify-content-center">
          <div className="contact-area col-lg-11 col-sm-11 p-5 m-5">
            <h3>You can contact me via:</h3>
            <h4>
              Email: <a href="mailto:xmnuc@o2.pl">xmnuc@o2.pl</a>
            </h4>
            <h4>
              Facebook:{' '}
              <a target="_blank" href="https://www.facebook.com/jakub.de.1048/" rel="noreferrer">
                Jakub
              </a>
            </h4>
            <h4>
              Github:{' '}
              <a target="_blank" href="https://github.com/xmNuc" rel="noreferrer">
                github.com/xmNuc
              </a>
            </h4>
          </div>
          <div className="row justify-content-center">
            <div className="footer-links col-lg-6 pt-4 pt-lg-0 justify-content-center ">
              <ul className="col">
                <li>
                  <HashLink to="/#top">Home</HashLink>
                </li>
                <li>
                  <HashLink to="/#about">About</HashLink>
                </li>
                <li>
                  <HashLink to="/#projects">Projects</HashLink>
                </li>
                <li>
                  <HashLink to="/#courses">Courses</HashLink>
                </li>
                <li>
                  <HashLink to="/#post-production">Video Edits</HashLink>
                </li>
                <li>
                  <HashLink to="/post/#top">Post article</HashLink>
                </li>
                <li>
                  <HashLink to="/auth">Login</HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <h6>
            Front-end made in React by &copy;{' '}
            <a target="_blank" href="https://github.com/xmNuc" rel="noreferrer">
              Jakub (NuC) 2022
            </a>
          </h6>
        </div>
      </section>
    </>
  );
};
