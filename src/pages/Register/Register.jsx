import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../services/user";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { logout } from "../../store/slices/authSlice";

function Register() {
  const { loading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [customError, setCustomError] = useState(null);

  useEffect(() => {
    if (user === "User already exist") {
      setCustomError("User already exist");
      dispatch(logout());
    } else if (user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  const submitForm = (data) => {
    if (data.password !== data.confirmPassword) {
      setCustomError("Password mismatch");
      return;
    }
    if (data.password.length < 8) {
      setCustomError("Password need to be atleast 8 characters");
      return;
    }
    data.username = data.username.toLowerCase();
    data.email = data.email.toLowerCase();
    dispatch(signUp(data));
  };

  return (
    <div className="login-container">

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit(submitForm)}>
          {customError && <h1>{customError}</h1>}
          <input
            type="text"
            placeholder="Enter Username"
            className="form-input"
            {...register("username")}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="form-input"
            {...register("email")}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            minLength="8"
            className="form-input"
            {...register("password")}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-input"
            {...register("confirmPassword")}
            required
          />
          <button
            type="submit"
            className="login-btns login-btn"
            disabled={loading}
          >
            {loading ? <h1>Loading...</h1> : "Sign Up"}
          </button>
        </form>
        <Link to="/login" type="submit" className="login-btns">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Register;
