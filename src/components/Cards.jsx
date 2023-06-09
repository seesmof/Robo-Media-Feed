import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(posts);
  console.log(users);
  console.log(comments);

  const Comments = ({ comments }) => {
    return (
      <>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.name}</p>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </>
    );
  };

  const [filledHeart, setFilledHeart] = useState(false);
  const [filledDislike, setFilledDislike] = useState(false);

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
          }}
        >
          <h2 style={{ fontSize: "1.2rem" }}>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {post.title}
            </a>
          </h2>
          <p
            style={{
              fontSize: ".9rem",
              color: "#888",
              marginBottom: ".8rem",
              marginTop: ".1rem",
            }}
          >
            by {users[post.userId - 1].name}
          </p>
          <p>{post.body}</p>

          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".4rem",
              marginTop: ".8rem",
            }}
          >
            {/* FIXME: Fix the issue with all the buttons changing state if one is changed */}
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "1.4rem",
                cursor: "pointer",
              }}
              onClick={() => setFilledHeart(!filledHeart)}
            >
              {filledHeart ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "1.4rem",
                cursor: "pointer",
              }}
              onClick={() => setFilledDislike(!filledDislike)}
            >
              {filledDislike ? <AiFillDislike /> : <AiOutlineDislike />}
            </button>
          </div>

          {/* TODO: Add a random amount of comments to the card, from 2 to 5. Add a like and dislike buttons. Add a show more comments button at the bottom as well as an input box for adding a new comment. */}
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
