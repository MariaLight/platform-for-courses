import { USER_ROLE_ID } from "../constants";

export const addUser = (login, password) => fetch("http://localhost:3026/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",

    },
    body: JSON.stringify({
        login,
        password,
        registered_at: generateDate(),
        role_id: USER_ROLE_ID.student,
        user_img: null,
        email: null,
        name: null
    })
}).then((createdUser) => createdUser.json())