import React from "react";
import styles from "../styles/login.module.css";

const RoundedButton = ({ type, text }) => {
  return (
    <button className={styles["rounded-btn"]} type={type}>
      {text}
    </button>
  );
};

export default RoundedButton;
