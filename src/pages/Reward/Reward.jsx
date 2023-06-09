import { useState, useEffect } from "react";
import "./Reward.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../services/Profile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import avatar from "../../assets/Martin.png";
import { logout } from "../../store/slices/authSlice";
import { useNavigate, useLocation } from "react-router-dom";

function Reward() {
  const { user } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile(user.profile);
      setProfile(profile);
    };
    fetchProfile();
  }, [location]);

  const loggingOut = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  const delay = (duration) => {
    return new Promise((res) => {
      setTimeout(res, duration);
    });
  };
  const delaying = async () => {
    await delay(1000);
  };
  delaying();
  // console.log(profile)
  if (!Object.keys(profile).length) return <h1>Loading...</h1>;

  return (
    <div className="reward">
      {profile.length === 1 ? <p>hello</p> : null}
      <div className="reward-top">
        <h1 className="reward-name">
          {profile.name.charAt(0).toUpperCase() + profile.name.slice(1)}
        </h1>{" "}
        <button className="logout" onClick={loggingOut}>
          Log Out
        </button>
      </div>
      <div className="reward-center">
        <img className="reward-logo" src={avatar}></img>
      </div>
      <p className="award-text">
        {profile.name.charAt(0).toUpperCase() + profile.name.slice(1)} Awards:
      </p>
      <Row
        xs={3}
        md={3}
        lg={4}
        className="g-3 reward-row"
        style={{
          background: "#e5dcd4",
          width: "90vw",
          margin: "1rem",
          borderRadius: "1rem",
        }}
      >
        {profile.badge.map((badge, idx) => (
          <Col key={idx} className="reward-col">
            <Card.Img
              style={{ width: "7rem" }}
              className="card-img-reward"
              src={badge.photo}
            />
            {/* <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>{badge.name}</Card.Title>
              </Card.Body> */}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Reward;
