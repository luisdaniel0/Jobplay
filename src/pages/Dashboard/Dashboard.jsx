import React from "react";
import { logout } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
// import "./DashBoard.css";

function DashBoard() {
  const { loading, user } = useSelector((state) => state.auth);

  const show = () => {
    console.log(user.user)
  }
  return (
    <div className="dashboard-container">
      <button onClick={show}></button>

    </div>
  );
}

export default DashBoard;
