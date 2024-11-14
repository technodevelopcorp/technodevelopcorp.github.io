import backgroundVideo from "../assets/unlimitedIdeas.mp4";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="home">
          <div className="overlay">
            <video src={backgroundVideo} autoPlay loop muted />
            <div className="home-content">
              <h1>Innovation, Design and Development by Global Synergy.</h1>
              <div className="learn-more-btns">
                <div className="learn-more-btn">
                  <Button
                    severity="info"
                    label="About us"
                    onClick={() => navigate("/about")}
                  />
                </div>
                <div className="learn-more-btn">
                  <Button
                    severity="info"
                    label="Our Work"
                    onClick={() => navigate("/news")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
