import { FETCH_PLANETS } from "../constants/actionTypes/PlanetActionTypes";

const initialState = {};

const Planets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return action.payload;
    default:
      return state;
  }
};

export default Planets;
