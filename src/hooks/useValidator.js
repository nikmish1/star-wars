import { useEffect, useState } from "react";

const useSearchValidator = (str) => {
  // 1) start Time;
  // 2) storeSearch Count;
  // 2) check if search count > 10 && timer elapsed less 60sec

  const [searchCount, setsearchCount] = useState(-1);
  const [intervalId, setIntervalId] = useState(null);
  const [timedout, setTimeout] = useState(false);
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    setsearchCount(searchCount + 1);
    checkValidation();
  }, [str]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimeout(true);
      setIsValid(true);
      setsearchCount(0);
    }, 10000);
    setIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const checkValidation = () => {
    if (searchCount <= 15) {
      console.log("sahi hai");
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
