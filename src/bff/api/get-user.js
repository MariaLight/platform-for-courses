import { transformUser } from "../transformers/transform-user";

export const getUser = async (loginToFind) => {

    const response = await fetch(`http://localhost:3026/users?login=${loginToFind}`);
    const [loadedUser] = await response.json();
    if (loadedUser) {
        return transformUser(loadedUser);
    } else {
        return null;
    }


};