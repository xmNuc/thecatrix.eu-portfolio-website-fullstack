import React from 'react';
import { Spinner } from '../../../CreationArea/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { OnePost } from './OnePost';

export const ShowPosts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  if (!posts.length && !isLoading) return 'There is no posts';

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="post-container">
      {posts
        .map((post) => (
          <OnePost key={post._id} id={post._id} post={post} setCurrentId={setCurrentId} />
        ))
        .reverse()}
    </div>
  );
};
