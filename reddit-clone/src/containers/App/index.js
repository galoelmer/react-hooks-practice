import React, { useState, useEffect } from 'react';
import db from '../firebase-config';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postRef = db.ref('posts');
    const onValueChange = (snapshot) => {
      setPost(snapshot.val());
      setLoading(false);
    };
    postRef.on('value', onValueChange);
  }, []);

  const handleUpvote = (e) => {
    const key = e.target.closest('[data-id]').dataset.id;
    const postRef = db.ref(`posts/${key}/upvote`);
    postRef.transaction((currentUpvote) => currentUpvote + 1);
  };

  const handleDownvote = (e) => {
    const key = e.target.closest('[data-id]').dataset.id;
    const postRef = db.ref(`posts/${key}/downvote`);
    postRef.transaction((currentDownvote) => currentDownvote + 1);
  };

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {posts &&
              Object.keys(posts).map((key) => {
                return (
                  <div key={key} data-id={key}>
                    <div>Title: {posts[key].title}</div>
                    <div>Upvotes: {posts[key].upvote}</div>
                    <div>Downvotes: {posts[key].downvote}</div>
                    <button onClick={handleUpvote}>Upvote</button>
                    <button onClick={handleDownvote}>Downvote</button>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <button>
        <Link to="/add-post">Add Post</Link>
      </button>
    </>
  );
};

export default Posts;
