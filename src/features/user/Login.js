import React from "react";
import { useDispatch } from "react-redux";
import { setUser, logout } from "./userSlice";

function Login() {
  const dispatch = useDispatch();
  const loginToApp = () => {
    dispatch(
      setUser({
        user: "Jatin Adhikari",
      })
    );
  };
  return (
    <div>
      <h1>Hey i am Login</h1>
      <button onClick={loginToApp}>Log Me out</button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Me Out
      </button>
    </div>
  );
}

export default Login;
