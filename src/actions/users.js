import { ACTION_TYPE } from "./type";

export const setUsers = (users) => ({
    type: ACTION_TYPE.SET_USERS,
    payload: users

})