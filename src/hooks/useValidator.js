import { useEffect, useState } from "react";

const useSearchValidator = (str, shouldValidate) => {
  const [searchCount, setsearchCount] = useState(-1);
  const [intervalId, setIntervalId] = useState(null);
  const [timedout, setTimeout] = useState(false);
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if (shouldValidate) {
      setsearchCount(searchCount + 1);
      checkValidation();
    }
  }, [str]);

  useEffect(() => {
    if (shouldValidate) {
      let intervalId = setInterval(() => {
        setTimeout(true);
        setIsValid(true);
        setsearchCount(0);
      }, 60000);
      setIntervalId(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const checkValidation = () => {
    if (searchCount <= 15) {
      setIsValid(true);
    } else {
      if (timedout) {
        console.log("reset", searchCount, timedout);
        setsearchCount(0);
        setIsValid(null);
        setTimeout(false);
      } else {
        console.log("pause", searchCount, timedout);
        setIsValid(false);
      }
    }
  };
  return isValid;
};

export default useSearchValidator;
