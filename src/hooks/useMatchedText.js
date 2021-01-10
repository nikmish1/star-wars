import { useEffect, useState } from "react";
import { getMatchingData } from "../utils/StringUtils";

const useMatchedText = (text, data) => {
  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    if (text) {
      let filteredItems = getMatchingData(text, data, "name");
      console.log("searching results:", filteredItems);
      setFilteredResult(filteredItems);
    } else {
      setFilteredResult([]);
    }
  }, [text, data]);

  return filteredResult;
};

export default useMatchedText;
