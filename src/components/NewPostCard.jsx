import React, { useRef } from "react";

const NewPostCard = ({ posts, setPosts }) => {
  const newPost = useRef();
  const postTitle = useRef();
  const addNewPost = () => {
    const newPostData = {
      title: postTitle.current.value,
      body: newPost.current.value,
      userId: Math.floor(Math.random() * 10) + 1,
      id: posts.length + 1,
    };
    setPosts([newPostData, ...posts]);
    postTitle.current.value = "";
    newPost.current.value = "";
  };

  return (
    <>
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.1rem" }}>New Post</h1>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <input
            type="text"
            className="underlined-input"
            placeholder="Post title..."
            ref={postTitle}
          />
          <textarea
            className="underlined-input"
            style={{ height: "3rem", resize: "none" }}
            placeholder="Post text..."
            ref={newPost}
          />
          <button className="button" onClick={addNewPost}>
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPostCard;
