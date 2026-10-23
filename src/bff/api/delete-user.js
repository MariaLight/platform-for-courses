import { API_URL } from "./config";

export const deleteUser = (userId) =>
    fetch(`${API_URL}/users/${userId}`, {
        method: "DELETE"
    })