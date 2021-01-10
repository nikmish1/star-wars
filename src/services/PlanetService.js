import request from "../api";

const PlanetService = {
  getAllPlanets: () => {
    let planets = request({ url: "api/planets/", cache: true });
    return planets;
  },

  getPlanet: (id) => {
    let users = request({ url: `api/planets/${id}`, cache: true });
    console.log(users);
    return users;
  },
};

export default PlanetService;
