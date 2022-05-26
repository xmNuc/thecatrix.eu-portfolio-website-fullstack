import React from 'react';
import megak from '../../../img/megak.png';
import samuraj from '../../../img/samuraj.png';
import codecademy from '../../../img/codecademy.jpg';
import udemy from '../../../img/udemy.png';
import videoicon from '../../../img/videoicon.png';
import { useInView } from 'react-intersection-observer';

export const Courses = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <section id="courses" className="courses">
        <div ref={ref} className="container">
          <div className="course-title">
            <span>My courses</span>
            <h2>My courses</h2>
            <p>Courses that changed a lot in my programming</p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className={inView ? 'icon-box icon-box-l active' : 'icon-box icon-box-l'}>
                <div className="course_picture">
                  <img src={megak} alt="MegaK logo" />
                </div>
                <h4 className="title">
                  <a target="_blank" href="https://www.megak.pl/" rel="noreferrer">
                    Mega K
                  </a>
                </h4>
                <p className="description">
                  Fourteen-month programming course, which started on 06.2021 and is still ongoing
                  til 08.2022, MegaK consists of nine stages: JavaScript, Node.js, Express, MongoDB,
                  mySQL, Typescript, React, React Native, Redux, Redux toolkit, Jest & TDD, Git,
                  Nest.js, pm2. Daily programming, hours of video material.
                </p>
                <br />
                <a target="_blank" href="https://youtu.be/Gl57E-Gek4Y" rel="noreferrer">
                  <img src={videoicon} alt="Video icon" /> MegaK spot video
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className={inView ? 'icon-box icon-box-l active' : 'icon-box icon-box-l'}>
                <div className="course_picture">
                  <img src={samuraj} alt="Samuraj programowania logo" />
                </div>
                <h4 className="title">
                  <a target="_blank" href="https://websamuraj.pl/" rel="noreferrer">
                    Samuraj programowania
                  </a>
                </h4>
                <p className="description">
                  Online course from basis to Front-end Developer.Six stages of programming from
                  learning HTML through CSS, animations, SCSS, JavaScript, Jquery, Node.js, Express,
                  MongoDB, Bem methodology, Git and Github. Lots of projects, a large dose of
                  knowledge. I completed this course in a year 2018
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className={inView ? 'icon-box icon-box-r active' : 'icon-box icon-box-r'}>
                <div className="course_picture">
                  <img src={codecademy} alt="Codecademy logo" />
                </div>
                <h4 className="title">
                  <a target="_blank" href="https://www.codecademy.com" rel="noreferrer">
                    Codecademy.com
                  </a>
                </h4>
                <p className="description">
                  Codecademy a web platform that focuses on teaching programming through concrete
                  examples of application development. A lots of coding exercises in JavaScript and
                  Node.js.
                </p>
                <br />
                <a target="_blank" href="https://youtu.be/FswDqER1WLQ" rel="noreferrer">
                  <img src={videoicon} alt="Video icon" /> Codecademy
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className={inView ? 'icon-box icon-box-r active' : 'icon-box icon-box-r'}>
                <div className="course_picture">
                  <img src={udemy} alt="Udemy logo" />
                </div>
                <h4 className="title">
                  <a target="_blank" href="https://www.udemy.com/" rel="noreferrer">
                    Udemy
                  </a>
                </h4>
                <p className="description">
                  Udemy site is one of the best places to learn programming. I expanded my knowledge
                  thanks to the JavaScript and English language courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
