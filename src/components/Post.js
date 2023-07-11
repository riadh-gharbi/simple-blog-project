import React from 'react';

const Post = ({ title, content, image }) => {
  return (
    <div className="card mb-3">
      {image && (
        <img src={URL.createObjectURL(image)} className="card-img-top" alt={title} />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Post;