import React from 'react';
import { About } from './Main/About';
import { CreationAreaPosts } from './Main/CreationAreaPosts';
import { Courses } from './Main/Courses';
import { Fotter } from './Main/Footer';
// import '../../css/style.css';
import { PostProduction } from './Main/PostProduction';
// import { Svg } from './Main/Svg';

export const Main = () => {
  return (
    <>
      <main id="main" className="main">
        <About />
        {/* <div className="mysvg-a">
          <Svg />
        </div> */}
        <CreationAreaPosts />
        <Courses />
        <PostProduction />
        <Fotter />
      </main>
    </>
  );
};
