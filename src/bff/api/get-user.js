import { transformUser } from "../transformers/transform-user";

export const getUser = async (emailToFind) => {

    const response = await fetch(`http://localhost:3026/users?email=${emailToFind}`);
    const [loadedUser] = await response.json();
    if (loadedUser) {
        return transformUser(loadedUser);
    } else {
        return null;
    }


};
export const getUserById = async (idToFind) => {

    const response = await fetch(`http://localhost:3026/users/${idToFind}`);

    const loadedUser = await response.json();
    if (loadedUser) {
        return transformUser(loadedUser);
    } else {
        return null;
    }
};