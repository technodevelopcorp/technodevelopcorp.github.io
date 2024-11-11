import backgroundVideo from "../../assets/unlimitedIdeas.mp4";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div>
        <div className="home">
          <div className="overlay">
            <video src={backgroundVideo} autoPlay loop muted />
            <div className="home-content">
              <h1>Innovation, Design and Development by Global Synergy.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
