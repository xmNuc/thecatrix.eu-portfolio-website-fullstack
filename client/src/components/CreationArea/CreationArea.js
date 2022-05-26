import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Posts } from './Posts/Posts';
import { Form } from './Form/Form';
import { getPosts } from '../../actions/posts';
import { HashLink } from 'react-router-hash-link';
import { Header } from '../NucPortfolio/Header';
// import '../../css/creationArea.css';

export const CreationArea = ({ scrolled }) => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Header scrolled={(scrolled = true)} />
      {user ? (
        <section id="projects" className="projects">
          <div className="project-title" style={{ marginTop: 100 }}>
            <span>Add Project</span>
            <h2>Add Project</h2>
            <p>Please use desktop computer to add new post. You will not make a mess.</p>
          </div>
          <Row>
            <Col className="col-8">
              <Posts setCurrentId={setCurrentId} />
            </Col>
            <Col className="col-4">
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Col>
          </Row>
        </section>
      ) : (
        <div className="not-logged">
          <div className="not-logged-info">
            <HashLink to="/auth">To see this page please login - here.</HashLink>
          </div>
        </div>
      )}
    </>
  );
};
