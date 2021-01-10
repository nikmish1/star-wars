import PlanetService from "../services/PlanetService";
import { FETCH_PLANETS } from "../constants/actionTypes/PlanetActionTypes";

//action creator
export const fetchCountryStates = () => (dispatch) => {
  PlanetService.getAllPlanets()
    .then((res) => {
      return dispatch({
        type: FETCH_PLANETS,
        payload: res,
      });
    })
    .catch((err) => {
      console.log("err");
    });
};
