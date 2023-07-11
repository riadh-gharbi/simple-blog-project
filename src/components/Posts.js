import React, { useState } from 'react';
import Post from './Post';
import PostForm from './PostForm';

const Posts = ({posts,setPosts,addPost}) => {
  

  

  return (
    <div>
      <h1>Posts</h1>
      <PostForm addPost={addPost} />
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} image={post.image} />
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
};

export default Posts;