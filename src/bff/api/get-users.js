export const getUsers = () => fetch("http://localhost:3026/users").then((loadedUsers) => loadedUsers.json());
