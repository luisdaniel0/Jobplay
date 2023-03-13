import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import "./protectedRoute.css";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="unauthorized">
        <NavLink to="/login">
          <h1 className="Filler">Unauthorized, Click to go to Login Screen</h1>
        </NavLink>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
