import Card from "./Card";
import React, { useEffect, useState } from "react";

const LandingCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="cards">
        {posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            userID={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </>
  );
};

export default LandingCards;

// TODO: Look into passing keys when mapping over objects
// ! Fix the issue with usernames not being displayed
