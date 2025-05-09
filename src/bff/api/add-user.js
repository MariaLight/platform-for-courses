import { USER_ROLE_ID } from "../constants";

export const addUser = (email, password) => fetch("http://localhost:3026/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",

    },
    body: JSON.stringify({
        email,
        password,
        registered_at: new Date().toLocaleDateString(),
        role_id: USER_ROLE_ID.student,
        user_img: null,
        name: null
    })
}).then((createdUser) => createdUser.json())