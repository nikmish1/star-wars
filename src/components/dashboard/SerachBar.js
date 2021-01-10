import React from "react";
import Input from "../../atoms/Input";
import UserService from "../../services/UserService";
import styles from "../../styles/searchBar.module.css";

const SearchBar = ({ searchQuery, suggetions, isValidQuery }) => {
  console.log("stylesstylesstylesstyles:", styles, isValidQuery);
  let currentUser = UserService.getCurrentUser();
  console.log("suggetions:::", suggetions, isValidQuery);
  const handleCharacterInput = (event) => {
    const { name, value } = event.target;
    searchQuery(value);
  };

  return (
    <>
      <Input
        type="text"
        name="search-character"
        placeholder="Search Character"
        id="search-character"
        readOnly={!isValidQuery}
        onChange={handleCharacterInput}
      />
      <div>
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
      {!isValidQuery && <div>Only 15 queries are allowed in 1 mins</div>}
    </>
  );
};

export default SearchBar;
