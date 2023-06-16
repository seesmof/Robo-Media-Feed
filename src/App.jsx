import React, { useEffect, useRef, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

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

    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  const Card = ({ post }) => {
    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
      setPostComments(comments.filter((comment) => comment.postId === post.id));
    }, [comments, post.id]);

    const newComment = useRef();

    const addNewComment = () => {
      const newCommentData = {
        body: newComment.current.value,
        postId: post.id,
        email: "user@example.com",
      };
      setPostComments([...postComments, newCommentData]);
      newComment.current.value = "";
    };

    const postUsername = users.find((user) => user.id === post.userId)?.name;

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
            <p>Posted by: {postUsername}</p>
          </div>

          <div className="card-comments">
            <h3>Comments</h3>
            <div className="new-comment-container">
              <input
                type="text"
                placeholder="Add a comment..."
                className="new-comment"
                ref={newComment}
              />
              <button className="new-comment-button" onClick={addNewComment}>
                Post Comment
              </button>
            </div>
            <div className="comments-container">
              {postComments.map((comment) => (
                <div className="comment-body" key={comment.id}>
                  <p className="comment-author">
                    {postUsername} - {comment.email}
                  </p>
                  <p>{comment.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderCards = () => {
    useEffect(() => {
      console.log("I run on every render: mount + update.");
    });

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
