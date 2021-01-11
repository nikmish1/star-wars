import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryStates } from "../../actions/planetActions";
import PopulationRange from "../../constants/planets/PopulationRamge";
import useMatchedText from "../../hooks/useMatchedText";
import useSearchValidator from "../../hooks/useValidator";
import UserService from "../../services/UserService";

import styles from "../../styles/searchBox.module.css";
import { Sort } from "../../utils/SortUtils";

import SearchBar from "./SerachBar";

const Dashboard = () => {
  const state = useSelector((state) => state.Planets);
  const { results } = state;
  const dispatch = useDispatch();
  const [query, setquery] = useState("");
  let currentUser = UserService.getCurrentUser();
  const shouldValidate = currentUser.name === "luke skywalker" ? false : true;

  let isValidQuery = useSearchValidator(query, shouldValidate);

  const GetPopulationIntensity = (population = 0) => {
    switch (true) {
      case population < PopulationRange.low.value:
        // console.log("population case1:", population);
        return PopulationRange.low.category;
      case population < PopulationRange.mid.value:
        // console.log("population case2:", population);
        return PopulationRange.mid.category;
      case population < PopulationRange.max.value:
        // console.log("population case3:", population);
        return PopulationRange.max.category;
      default:
        return PopulationRange.max.category;
    }
  };

  const validatePopulation = (population) => {
    return population === "unknown" ? 0 : parseInt(population);
  };

  const matchedResults = useMatchedText(query, results).map(
    ({ name, population }) => ({
      name: name,
      value: validatePopulation(population),
      intensity: GetPopulationIntensity(validatePopulation(population)),
    })
  );

  Sort(matchedResults, "value");

  const fetchPlanets = useCallback(() => dispatch(fetchCountryStates()), [
    dispatch,
  ]);

  const searchQuery = (queryText) => {
    setquery(queryText);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div className={styles["search-box-main"]}>
      <div className={styles["search-box-header"]}>
        <div className={styles["search-box-header-name"]}>
          welcome back <strong>Nikhil</strong>
        </div>
        <div className={styles["search-box-header-exit"]}>exit</div>
      </div>
      <div className={styles.searchBoxContainer}>
        <div className={styles.searchBarContainer}>
          <SearchBar
            suggetions={matchedResults}
            searchQuery={searchQuery}
            isValidQuery={isValidQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
