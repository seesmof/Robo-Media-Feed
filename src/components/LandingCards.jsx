import Card from "./Card";
import React, { useEffect, useState } from "react";
import NewPostCard from "./NewPostCard";

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
      <NewPostCard posts={posts} setPosts={setPosts} />
      <div className="cards">
        {posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </>
  );
};

export default LandingCards;
