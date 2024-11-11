import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Card className="notFound">
        <h3>Looks like this page doesn't exist!</h3>
        <p>Click the button below to go back to the home page.</p>
        <Button
          label="Back to posts"
          icon="pi pi-arrow-circle-left"
          onClick={() => navigate("/")}
        />
      </Card>
    </>
  );
}
