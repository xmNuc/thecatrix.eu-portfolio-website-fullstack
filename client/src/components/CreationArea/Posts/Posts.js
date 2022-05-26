import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { useSelector } from 'react-redux';

import { Post } from './Post';

export const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  if (!posts.length && !isLoading) return 'There is no posts';

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="post-container">
      {posts.map((post) => (
        <Post key={post._id} id={post._id} post={post} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
};
