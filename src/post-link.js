

import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div key={post.title}>
  <h2 className="section-title">{title}</h2>
  <div className="grid-container">
    {/* Replace these with actual data and images */}
    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="grid-item"
        onClick={() => console.log(`Clicked on item ${item}`)}
      >
        <img
          src={`https://via.placeholder.com/150?text=Image${item}`}
          alt={`Adventure ${item}`}
        />
        <div className="text">
          <h3>Adventure {item}</h3>
          <p>Description of adventure {item}</p>
        </div>
      </div>
    ))}
  </div>
  <img
    src={vine}
    alt="Vine"
    style={{ display: "block", margin: "auto" }}
  />
</div>
  );
};

export default BlogPost;
  