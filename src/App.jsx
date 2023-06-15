import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
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

  const Card = () => {
    return (
      <>
        <div className="card">
          <div className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            minus iusto ducimus, officia velit illum voluptas quis aut
            exercitationem maxime.
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <section className="container"></section>
    </>
  );
}

export default App;
