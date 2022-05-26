import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { YtVideo } from './YtVideo';
// import '../../../css/hero.css';

export const Hero = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="hero-text col-lg-6">
              <h1>Hello my name is Jakub</h1>
              <h2>Fullstack developer, Video editor</h2>
              <h6>Check my projects:</h6>

              <div className="btns">
                <HashLink to="/#projects" className="btn-menu">
                  Dev Projects
                </HashLink>
                <HashLink to="/#post-production" className="btn-menu">
                  Post Production
                </HashLink>
                <a
                  target="_blank"
                  href="https://github.com/xmNuc"
                  className="btn-menu"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div
              className="col-lg-6
             d-flex align-items-center justify-content-center position-relative"
            >
              <YtVideo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
