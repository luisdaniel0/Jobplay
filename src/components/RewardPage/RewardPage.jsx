import React from "react";
import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../../services/Profile";
import { useSelector } from "react-redux";
import { skillBadge } from "../../assets/badges";
import reward from "../../assets/SilverSkill.png";
import { useNavigate } from "react-router-dom";

const RewardPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  const getReward = async (e) => {
    e.preventDefault();
    skillBadge.map((badge, idx) => {
      const form = {
        badge: badge.id,
      };
      const fetchProfile = async () => {
        const newBadges = await updateProfile(user.profile, form);
        console.log(newBadges);
        console.log(profile);
      };
      len = profile.skillsUnlocked.length ? profile.skillsUnlocked.length : 0
      if (len < badge.point) {
        fetchProfile();
      }
      navigate("/reward", { replace: true });
    });
  };

  if (!Object.keys(profile).length) return <h1>Loading...</h1>;


  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile(user.profile);
      setProfile(profile);
    };
    fetchProfile();
  }, []);

  return (
    <div className="reward-Page">
      <img className="home-logo" src={reward}></img>
      <button onClick={getReward}>Claim your badge here!</button>
    </div>
  );
};

export default RewardPage;
