import { ACTION_TYPE } from './type';
import { server } from '../bff';


export const setUser = (user) => ({
    type: ACTION_TYPE.SET_USER,
    payload: user
})
export const changeUserInfo = (user) => ({
    type: ACTION_TYPE.CHANGE_USER_INFO,
    payload: user
})
export const logout = (session) => {
    server.logout(session);
    return {
        type: ACTION_TYPE.LOGOUT,
    }

}