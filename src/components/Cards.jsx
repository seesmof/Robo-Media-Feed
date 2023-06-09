import React from "react";

const Cards = () => {
  const arrayOfPosts = [];

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };

  getPosts()
    .then((data) => {
      arrayOfPosts.push(data);
      console.log(arrayOfPosts);
    })
    .catch((err) => console.log(err));

  for (let i = 0; i < arrayOfPosts.length; i++) {
    console.log(arrayOfPosts[i]);
  }

  return (
    <>
      <div style={{ width: "100%" }}></div>
    </>
  );
};

export default Cards;
