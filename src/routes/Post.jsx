import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate, useLocation } from "react-router-dom";
import "primeicons/primeicons.css";

export default function Post() {
  const navigate = useNavigate();
  let post = useLocation();

  return (
    <>
      <Card>
        <h4>{post.state.date}</h4>
        <h1>{post.state.title}</h1>
        <p>{post.state.content}</p>
        <Button
          label="Back to posts"
          severity="info"
          icon="pi pi-arrow-circle-left"
          onClick={() => navigate("/news")}
        />
      </Card>
    </>
  );
}
