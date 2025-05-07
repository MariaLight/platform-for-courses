import { USER_ROLE_ID } from '../constants'

export const removeComment = () => {
    console.log('removeComment');
}

export const getUsers = () => fetch("http://localhost:3026/users").then((loadedUsers) => loadedUsers.json());

export const getUser = async (loginToFind) => {
    try {
        const response = await fetch(`http://localhost:3026/users?login=${loginToFind}`);
        const [loadedUser] = await response.json();
        return loadedUser;
    } catch (error) {
        console.error('Ошибка при получении пользователя:', error);
        return null;
    }

};

export const generateDate = () => new Date(Math.random() * 1000000000000 + 1999999999999).toISOString().substring(0, 16).replace("T", " ");

export const createSession = (roleId) => {
    const session = {
        logout() {
            Object.keys(session).forEach((key) => delete session[key])
        },
    };

    switch (roleId) {
        case USER_ROLE_ID.admin:
            session.removeComment = removeComment;
            break;
        case USER_ROLE_ID.moderator:
            session.removeComment = removeComment;
            break;
        case USER_ROLE_ID.reader:
            break;
        default:
        //nothing
    }
    return session;
}

export const addUser = (login, password) => fetch("http://localhost:3026/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",

    },
    body: JSON.stringify({
        login,
        password,
        registered_at: generateDate(),
        role_id: 4,
        user_img: null,
        email: null,
        name: null
    })
}).then((createdUser) => createdUser.json())