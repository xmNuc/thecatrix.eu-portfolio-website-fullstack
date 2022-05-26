import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../../../actions/posts';
// import '../../../../css/nucDetails.css';
import { Spinner } from 'react-bootstrap';
import { Header } from '../../Header';
import { HashLink } from 'react-router-hash-link';

export const NucDetails = ({ scrolled }) => {
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) return null;

  if (isLoading) {
    return <Spinner className="spinner" animation="border" variant="secondary" />;
  }

  return (
    <>
      <Header scrolled={(scrolled = true)} />

      <section className="details-wrap">
        <div className="nuc-container row container-fluid">
          <div className="details-back">
            <HashLink to="/#projects" className="details-back-btn">
              BACK
            </HashLink>
          </div>
          <div className="details-wraper row ">
            <div className="detail-card d-flex col-md-6 col-lg-6 p-0 m-0 flex-column justify-content-center align-items-center">
              <p className="h4">{post.title}</p>
              <p className="h5">{post.message}</p>
              <p className="h6">Technologies: {post.tags.map((tag) => `${tag} `)}</p>
              <p className="h6">{post.info}</p>
              {post.website && (
                <p className="h6">
                  <a href={post.website} target="_blank" rel="noopener noreferrer">
                    Website: CLICK HERE
                  </a>
                </p>
              )}
              {post.github && (
                <p className="h6">
                  <a href={post.github} target="_blank" rel="noopener noreferrer">
                    GitHub: CLICK HERE
                  </a>
                </p>
              )}
              <p className="h6">Build in {post.builded} year.</p>
            </div>

            <div className="d-flex col-md-6 col-lg-6 justify-content-center p-0">
              <div className="detail-card col-12">
                {post.website ? (
                  <a href={post.website} target="_blank" rel="noopener noreferrer">
                    <img className="detail-media" src={post.selectedFile} alt={post.title} />
                  </a>
                ) : (
                  <img className="detail-media" src={post.selectedFile} alt={post.title} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="details-bottom"></div>
      </section>
    </>
  );
};
