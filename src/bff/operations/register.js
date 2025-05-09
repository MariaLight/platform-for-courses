import { sessions } from "../session";
import { addUser, getUser } from "../api";


export const register = async (regEmail, regPassword) => {
    const existedUser = await getUser(regEmail);


    if (existedUser) {
        return {
            error: 'Такой логин уже занят',
            res: null
        }
    }

    const user = await addUser(regEmail, regPassword);

    return {
        error: null,
        res: {
            id: user.id,
            email: user.email,
            roleId: user.role_id,
            name: null,
            userImg: null,
            session: sessions.create(user)
        },
    }
}