import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import jobPlaylogo from "../../components/imgs/jobplaylogo.png"
import startbutton from "../../components/imgs/startbutton.png";
import avatar from "../../assets/Martin.png";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="home-container">
      <div className="home-logo-container">
        <img className="home-logo" src={jobPlaylogo}></img>
      </div>
      <div className="home-center">
        <img className="home-logo" src={avatar}></img>
      </div>
      {user ? (
        <div className="home-bot">
          <p>Welcome Back!</p>
          <p className="home-text">The job-searching journey is tough.</p>
          <p className="home-text">
            But we’re here to help you celebrate your accomplishments!
          </p>

          <Link to="/dashboard" type="submit" className="home-btns">
            <img className="home-logo" src={startbutton}></img>
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
