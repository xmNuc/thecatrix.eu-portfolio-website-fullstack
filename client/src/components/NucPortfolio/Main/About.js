import React from 'react';
import { useInView } from 'react-intersection-observer';
import about from '../../../img/about.jpg';

export const About = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <section id="about" className="about about-bg">
        <div className="container">
          <div className="row">
            <div ref={ref} className="col-lg-6 order-1 order-lg-2">
              <div className={inView ? 'about-img active' : 'about-img'}>
                <img src={about} alt="Coding person by Olia Danilevich from Pexels" />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content pb-3">
              <h3>About me.</h3>
              <p>
                For several years in my spare time i am involved in software development and video
                editing. I do that because it's my passion. So i decided to change my life and start
                working on creation software development. I have a solid background for that, a BSc
                degree and a big passion for computers and software. Thanks to that I absorb
                frequent changes in the software and news very quickly. I started preparations for
                this change in 2018, but milestone i'v made in mid-2021. Then I started a one-year
                "MegaK" course/bootcamp on which I learned to work professionally with JavaScript,
                Node.js, Expres.js, Typescript, React.js, database MySQL and Mongodb. I'v Improved
                handling tools like Git, npm, and yarn. Combined with my previous years knowledge
                about Html, css, Bootstrap, Javascript and fluent computer usage, I became a
                Fullstack developer.
              </p>
              <p>
                Over the years of my freelance activity, I have built several websites and
                applications for various companies. I implemented them online, installed domains,
                set up hosting accounts, also dns redirects. I created e-mail accounts for companies
                and their employees. I'v implemented programs for website traffic analysis for
                companies. My knowledge of programs from Adobe group, such as Photoshop, Premiere
                and XD, was pass freely compose graphics and multimedia content for websites.
              </p>
              <p>
                I create and manage my future in such a way that I can work and do what I like, in
                the field of software development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
