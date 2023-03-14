import React from "react";
import { logout } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
// import "./DashBoard.css";

function DashBoard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const show = () => {
    console.log(user)
  }
  return (
    <div className="dashboard-container">
      <button onClick={show}>DEBUG User Console</button>
      <button onClick={() => dispatch(logout())}>logout</button>

    </div>
  );
}

export default DashBoard;
