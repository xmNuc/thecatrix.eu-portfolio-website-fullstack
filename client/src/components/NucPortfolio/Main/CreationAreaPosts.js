import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ShowPosts } from './Posts/ShowPosts';
import { getPosts } from '../../../actions/posts';

export const CreationAreaPosts = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <section id="projects" className="projects">
        <div className="project-title">
          <span>Projects</span>
          <h2>Projects</h2>
          <p>Few programing projects whitch was made by me</p>
        </div>
        <ShowPosts setCurrentId={setCurrentId} />
      </section>
    </>
  );
};
