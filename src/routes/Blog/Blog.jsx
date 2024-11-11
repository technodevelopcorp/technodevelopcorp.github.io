import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("../../posts.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error("Unable to fetch data:", error));
  }, []);

  return (
    <>
      <div>
        {posts ? (
          posts.map((post) => {
            return (
              <Card
                id={post.id}
                onClick={() =>
                  navigate(`/blog/posts/${post.id}`, { state: post })
                }
                className="post"
              >
                <h4>{post.date}</h4>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <h4>Authour: {post.authour}</h4>
              </Card>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}
