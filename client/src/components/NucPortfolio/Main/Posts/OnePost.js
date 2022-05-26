import React from 'react';
// import moment from 'moment';
import { Card, CardImg } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import '../../../../css/style.css';

export const OnePost = ({ post }) => {
  const navigate = useNavigate();

  const handlePostDetails = () => {
    navigate(`/post/${post._id}`);
  };
  return (
    <>
      <Card className="onepost-card" onClick={handlePostDetails}>
        <CardImg
          className="onepost-media"
          style={{ backgroundImage: `url(${post.selectedFile})` }}
          title={post.title}
        />
        <div className="onepost-overlay">
          <p className="h6">{post.creator}</p>
        </div>
        <div className="onepost-details">
          <p className="h6">
            <small>{post.tags.map((tag) => `${tag},`)}</small>
          </p>
        </div>
        <p className="h4 onepost-title">{post.title}</p>
        <p className="h6 onepost-message">{post.message}</p>
      </Card>
    </>
  );
};
