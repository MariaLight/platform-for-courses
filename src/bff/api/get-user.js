import { transformUser } from "../transformers/transform-user";
import { API_URL } from "./config";

export const getUser = async (emailToFind) => {

    const response = await fetch(`${API_URL}/users?email=${emailToFind}`);
    const [loadedUser] = await response.json();
    if (loadedUser) {
        return transformUser(loadedUser);
    } else {
        return null;
    }


};
export const getUserById = async (idToFind) => {

    const response = await fetch(`${API_URL}/users/${idToFind}`);

    const loadedUser = await response.json();
    if (loadedUser) {
        return transformUser(loadedUser);
    } else {
        return null;
    }
};