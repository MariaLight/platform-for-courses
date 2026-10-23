import { API_URL } from "./config";

export const getRoles = () => fetch(`${API_URL}/roles`).then((loadedRoles) => loadedRoles.json());
