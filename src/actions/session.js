import { ACTION_TYPE } from './type';
import { server } from '../bff/server';


export const setUser = (user) => ({
    type: ACTION_TYPE.SET_USER,
    payload: user
})
export const logout = (session) => {
    server.logout(session);
    return {
        type: ACTION_TYPE.LOGOUT,
    }

}