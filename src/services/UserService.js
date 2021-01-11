import request from "../api";
import Storage from "./StorageService";

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

  setCurrentUser: (loginData) => {
    Storage.set("loggedInUser", loginData);
  },

  getCurrentUser: () => {
    let currentUSer = Storage.get("loggedInUser");
    return currentUSer;
  },

  deleteCurrentUser: () => {
    Storage.delete("loggedInUser");
  },

  isAdmin: () => {
    return UserService.getCurrentUser() === "Luke Skywalker";
  },
};

export default UserService;
