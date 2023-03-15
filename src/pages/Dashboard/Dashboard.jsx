import { useState, useEffect } from "react";
import { logout } from "../../store/slices/authSlice";
import { getProfile } from "../../services/Profile";
import { useDispatch, useSelector } from "react-redux";
import DashCard from "../../components/DashCard/DashCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import "./Dashboard.css";

function DashBoard() {
  const { user } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile(user.profile);
      setProfile(profile);
    };
    fetchProfile();
  }, []);

  return (
    <div className="dashboard">
      <Row xs={1} md={1} className="g-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx} className="d-flex justify-content-center align-item-center">
            <DashCard />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DashBoard;
