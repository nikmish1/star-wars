import styles from "../../styles/login.module.css";
const StarWarsLogo = () => {
  return (
    <div className={styles["login-logo"]}>
      <img
        src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
        width="150"
        alt="star wars"
      />
    </div>
  );
};

export default StarWarsLogo;
