import React, { useContext } from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import { AppContext } from "../contexts/AppContextWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLogout } from "../store/slices/userSlice";

function Signin() {
  const { user, isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleLogin = (user) => {
    dispatch(setUser(user.email.split("@")[0]));
    // appDispatch({
    //   type: "SIGNIN",
    //   payload: user.email.split("@")[0],
    // });
    // appDispatch({ type: "SET_SIGNIN_STATUS" });
    reset();
    navigate("/");
  };
  return (
    <div id="login-page">
      <div id="login-content">
        <p id="signin-heading">Sign In</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <input
            placeholder="email..."
            type="email"
            {...register("email", { required: "email required" })}
          />
          {errors?.email && <p className="error-msg">{errors.email.message}</p>}
          <input
            placeholder="password..."
            type="password"
            {...register("password", {
              required: "password required",
              minLength: {
                value: 8,
                message: "password must contain atleast 8 characters",
              },
            })}
          />
          {errors?.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}

          <button id="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
