import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../atoms/Input";
import RoundedButton from "../../atoms/RoundedButton";
import UserService from "../../services/UserService";
import styles from "../../styles/login.module.css";
import Storage from "../../services/StorageService";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = await UserService.validateUser(loginData);
    // let isValid = true;
    if (isValid) {
      Storage.set("loggedInUser", loginData);
      history.push(`/dashboard`);
    }
    console.log("isValid:", isValid);
    //store logged in user details
    //check if valid and navigate accrdingly
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit} method="post">
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="passord"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <div className={styles["login-btn-container"]}>
          <RoundedButton type="submit" text="START" />
        </div>
      </form>
    </div>
  );
};

export default Login;
