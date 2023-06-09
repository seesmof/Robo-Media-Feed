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

  const Card = (id) => {
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
          }}
        ></div>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {posts.map((post) => {
          return <Card key={post} />;
        })}
      </div>
    </>
  );
};

export default Cards;
