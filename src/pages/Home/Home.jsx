import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import jobPlaylogo from "../../components/imgs/jobPlaylogo.png"

function Home() {
  // const user = { name: "Hello" };
  const user = null;
  return (
    <div className="home-container">
      <div className="home-logo-container">
        <img
          className="home-logo"
          src={jobPlaylogo}
        ></img>
      </div>
      <div className="home-center">
        <img
          className="home-avatar"
          src="https://www.pngplay.com/wp-content/uploads/10/Avatar-The-Last-Airbender-PNG-Photo-Image.png"
        ></img>
      </div>
      {user ? (
        <div className="home-bot">
          Welcome Back
          <Link to="/dashboard" type="submit" className="home-btns">
            Let's Jump in
          </Link>
        </div>
      ) : (
        <div className="home-bot">
          Join Us!
          <Link to="/login" type="submit" className="home-btns">
            Login Here
          </Link>
          <Link to="/signUp" type="submit" className="home-btns">
            Sign Up Here
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
