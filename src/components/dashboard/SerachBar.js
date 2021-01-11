import React from "react";
import Input from "../../atoms/Input";
import styles from "../../styles/searchBar.module.css";

const SearchBar = ({ searchQuery, suggetions, isValidQuery }) => {
  const handleCharacterInput = (event) => {
    const { value } = event.target;
    searchQuery(value);
  };

  return (
    <>
      <Input
        type="text"
        name="search-character"
        placeholder="Type planet name"
        id="search-character"
        readOnly={!isValidQuery}
        onChange={handleCharacterInput}
      />
      <div className={suggetions.length > 0 ? styles["result-container"] : ""}>
        {suggetions.map(({ name, value, intensity }) => (
          <>
            <div className={`${styles["result-box"]}`}>
              <div className={` ${styles[intensity]}`}>
                <div>{name}</div>
                <div>{value}</div>
                {/* <div>{intensity}</div> */}
              </div>
            </div>
          </>
        ))}
      </div>
      {isValidQuery === false && (
        <div>Only 15 queries are allowed in 1 mins</div>
      )}
    </>
  );
};

export default SearchBar;
