import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import "./ProtectedRoutes.css";

const ProtectedRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="unauthorized">
        <NavLink to="/login">
          <h1 className="filler">Unauthorized</h1>
          <p className="filler">Click to go to Login Screen</p>
        </NavLink>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoutes;
