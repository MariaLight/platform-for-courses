import { transformUser } from "../transformers/transform-user";
import { API_URL } from "./config";

export const getUsers = () => fetch(`${API_URL}/users`).then((loadedUsers) => loadedUsers.json())
.then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser))
;
