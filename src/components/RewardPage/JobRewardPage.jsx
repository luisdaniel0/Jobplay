import React from "react";
import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../../services/Profile";
import { useSelector } from "react-redux";
import { jobBadge } from "../../assets/badges";
import reward from "../../assets/Gold.png";
import { useNavigate } from "react-router-dom";

const RewardPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  const getReward = async (e) => {
    e.preventDefault();
    jobBadge.map((badge, idx) => {
      const form = {
        badge: badge.id,
      };
      const addBadge = async () => {
        const newBadges = await updateProfile(user.profile, form);
        console.log(newBadges);
        console.log(profile);
      };
      const len = profile.jobApplied.length
        ? profile.jobApplied.length
        : 1;
      if (len === badge.point) {
        addBadge();
      }
      navigate("/reward", { replace: true });
    });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile(user.profile);
      setProfile(profile);
    };
    fetchProfile();
  }, []);

  if (!Object.keys(profile).length) return <h1>Loading...</h1>;

  return (
    <div className="reward-Page">
      <h1 className="rewardpage-title">Congrats!</h1>
      <img className="home-logo" src={reward}></img>
      <button onClick={getReward}>Claim your badge here!</button>
    </div>
  );
};

export default RewardPage;
