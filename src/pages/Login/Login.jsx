import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/user";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

function Login() {
  const { isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(login(data));
    navigate("/", { replace: true });
  };

  return (
    <div className="login-container">

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            placeholder="Email"
            className="form-input"
            {...register("email")}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            {...register("password")}
            required
          />
          <button
            type="submit"
            className="login-btns login-btn"
            disabled={isLoading}
          >
            {isLoading ? <h1>Loading...</h1> : "Login In"}
          </button>
        </form>
        <Link to="/signup" className="login-btns sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;