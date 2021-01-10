import StarWarsLogo from "../logo/StarWarsLogo";
import Login from "./Login";
import styles from "../../styles/login.module.css";

const LoginInput = () => {
  return (
    <div className={styles["login-main"]}>
      <div className={styles["login-input-container"]}>
        <StarWarsLogo />
        <Login />
      </div>
    </div>
  );
};

export default LoginInput;
