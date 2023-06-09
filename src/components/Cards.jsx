import React, { useEffect, useState } from "react";

const Cards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(posts);

  const Card = ({ post }) => {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: ".4rem",
            gap: "1rem",
          }}
        >
          <h2>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              {post.title}
            </a>
          </h2>
          <p>{post.body}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default Cards;
