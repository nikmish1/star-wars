// import { useEffect, useState } from "react";
// import request from "../api";

// export const useUserData = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const getUserData = async () => {
//       let users = await request({ url: "api/people/", cache: true });
//       setUsers(users);
//     };
//     getUserData();
//   }, []);
//   return users;
// };
// export default useUserData;
