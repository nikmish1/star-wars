import request from "../api";
import useUserData from "../hooks/useUserData";

const UserService = {
  getAllUsers: () => {
    let users = request({ url: "api/people/", cache: true });
    console.log("users>", users);
    return users;
  },
  validateUser: async ({ username, password }) => {
    const { results } = await UserService.getAllUsers();
    return !!results.filter(
      (user) => user.name === username && user.birth_year === password
    ).length;
  },

  getCurrentUser: () => {
    return { username: "Luke Skywalker" };
  },
};

export default UserService;
