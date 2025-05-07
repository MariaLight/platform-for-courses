export const getRoles = () => fetch("http://localhost:3026/roles").then((loadedRoles) => loadedRoles.json());
