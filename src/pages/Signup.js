import React from "react";
import "../styles/Signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleSignup = async (user) => {
    try {
      const signupResponse = await axios.post(
        "http://localhost:7071/users",
        user
      );
      debugger;
      if (signupResponse.status === 201) {
        alert("user saved successfully");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
    <div id="signup-page">
      <div id="signup-content">
        <p id="signup-heading">Sign Up</p>
        <form onSubmit={handleSubmit(handleSignup)}>
          <input
            placeholder="username..."
            type="text"
            {...register("username", { required: "username required" })}
          />
          {errors?.username && (
            <p className="error-msg">{errors.username.message}</p>
          )}
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
              required: "password is required",
              minLength: { value: 8, message: "password must be 8 characters" },
            })}
          />
          {errors?.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
          <button id="signup-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
