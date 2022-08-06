import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// API call
import GetRegionsAPI from "./GetAPI/GetRegionsAPI";
import getApiValue from "./GetAPI/getApiValue";

export default function Register() {
  const firstName = useRef();
  const middleName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const mobile = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        mobile: mobile.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialPH</h3>
          <span className="loginDesc">
            Connect with your family and friends in the Philippines
          </span>
        </div>
        {/* <GetRegionsAPI/> */}
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <GetRegionsAPI />
            <input
              placeholder="First Name"
              required
              ref={firstName}
              className="loginInput"
            />
            <input
              placeholder="Middle Name"
              ref={middleName}
              className="loginInput"
            />
            <input
              placeholder="Last Name"
              required
              ref={lastName}
              className="loginInput"
            />
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Mobile"
              required
              ref={mobile}
              className="loginInput"
              type="number"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login" className="loginRegisterButton">
            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
