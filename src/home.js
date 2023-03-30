import React, { useState, useEffect } from 'react';
import "./home.css";
import BlogPost from './blog';
import axios from 'axios';
import branch1 from "./images/branch2.png";
import branch2 from "./images/branch1.png";
import logo from "./images/logo.png";
import vine from "./images/vine.png";

export function Home() {
  const [posts, setPosts] = useState([]);
  const sections = [
    {title: "Latest Adventures", cat: 23},
    {title: "Trail Tales Adventure Series", cat: 23},
    {title: "Learning Center", cat: 23}
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://trail-tales.us/wp-json/wp/v2/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  
  return (
    <div className="App">
      <img
        src={branch1}
        alt="Branch 1"
        style={{ position: "absolute", top: 0, left: 0, zIndex:10 }}
      />
      <img
        src={branch2}
        alt="Branch 2"
        style={{ position: "absolute", top: 0, right: 0, zIndex:10 }}
      />

      <div className="logo-container">       
          <img className="logo" src={logo} alt="Logo" />        
      </div>

      <div className="App">
        <h1>WordPress Blog Posts</h1>
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
       </div>

      <div className="email-input">
        <input type="email" placeholder="Enter your email" />
        <button>Yipee!</button>
      </div>

      <img src={vine} alt="Vine" style={{ display: "block", margin: "auto" }} />

      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="section-title">{section.title}</h2>
          <div className="grid-container">
            {/* Replace these with actual data and images */}
            {post.map((item) => (
              <div
                key={item.id}
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
      ))}

      <div className="footer"></div>
    </div>
  );
}


