import React from "react";

const Cards = () => {
  let fetchedPost;

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
    return data;
  };

  return (
    <>
      <div style={{ width: "100%" }}></div>
    </>
  );
};

export default Cards;
