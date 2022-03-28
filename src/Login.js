import React, { useState } from "react";
import "./login.css";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const logMeIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth,"userAuth Data")
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            password:password,
            displayName: userAuth.user.displayName,
            profileUrl: image,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter Full Name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userAuth) => {
        console.log("hey ia m register userAtuh", userAuth);
        await userAuth.user.updateProfile({
          email: userAuth.user.email,
          password:userAuth.user.password,
          displayName:name,
          profileUrl:image
        });

        // console.log("hey ia m register userAtuh", userAuth);
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            profileUrl: image,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <img
        src="https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your Name"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Enter your Image Url"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your @email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your Password"
        />
        <button onClick={logMeIn}>Log In</button>
      </form>
      <p className="login_register">
        Not a member?
        <span onClick={register}>Register Now</span>
      </p>
    </div>
  );
}

export default Login;
