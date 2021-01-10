import styles from "../styles/inputBox.module.css";

const Input = ({ type, name, id, onChange, readOnly, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      readOnly={readOnly}
      {...props}
      className={styles["search-bar"]}
    />
  );
};

export default Input;
