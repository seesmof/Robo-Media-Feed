import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComments(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  const Card = ({ post }) => {
    return (
      <>
        <div className="card">
          <div className="card-title">
            <h2>{post.title}</h2>
          </div>
          <div className="card-body">
            <p>{post.body}</p>
          </div>
          <div className="card-author">
            <p>
              Posted by: {users.find((user) => user.id === post.userId)?.name}
            </p>
          </div>
        </div>
      </>
    );
  };

  const renderCards = () => {
    return (
      <>
        <div className="cards">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <section className="container">{renderCards()}</section>
    </>
  );
}

export default App;
