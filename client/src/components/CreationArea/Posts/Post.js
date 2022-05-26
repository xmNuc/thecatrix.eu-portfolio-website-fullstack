import React from 'react';
import moment from 'moment';
import { Card, CardImg, Button } from 'react-bootstrap';
// import '../../../css/style.css';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';
import { useNavigate } from 'react-router-dom';

export const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePostDetails = () => {
    navigate(`/post/${post._id}`);
  };

  return (
    <>
      <Card className="onepost-card">
        <CardImg
          className="onepost-media"
          style={{ backgroundImage: `url(${post.selectedFile})` }}
          title={post.title}
          onClick={handlePostDetails}
        />
        <div className="onepost-overlay">
          <p className="h6">{post.creator}</p>
          <p className="h6">{moment(post.createdAt).fromNow()}</p>
        </div>
        <div className="onepost-overlay2">
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
            -=Edit=-
          </Button>
        </div>
        <div className="onepost-details">
          <p className="h6">
            <small>{post.tags.map((tag) => `${tag}, `)}</small>
          </p>
        </div>
        <p className="h4 onepost-title">{post.title}</p>
        <p className="h6 onepost-message">{post.message}</p>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <div>Delete</div>
        </Button>
      </Card>
    </>
  );
};
