import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import dataPosts from "../../data/posts";

export default function Blog() {
  const [posts, setPosts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(dataPosts.posts);
  }, []);

  return (
    <>
      <div>
        {posts ? (
          posts.map((post) => {
            return (
              <Card
                key={post.id}
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
