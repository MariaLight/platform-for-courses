import { sessions } from "../session";
import { addUser, getUser } from "../api";


export const register = async (regLogin, regPassword) => {
    const existedUser = await getUser(regLogin);


    if (existedUser) {
        return {
            error: 'Такой логин уже занят',
            res: null
        }
    }

    const user = await addUser(regLogin, regPassword);

    return {
        error: null,
        res: {
            id: user.id,
            login: user.login,
            roleId: user.role_id,
            email: null,
            name: null,
            userImg: null,
            session: sessions.create(user)
        },
    }
}