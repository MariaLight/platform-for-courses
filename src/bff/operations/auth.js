import { getUser } from "../api";
import { sessions } from "../session";

export const authorize = async (authUserLogin, authUserPassword) => {

    const user = await getUser(authUserLogin);

    if (!user) {
        return {
            error: 'Пользователь не найден',
            res: null
        }
    }
    const { id, login, password, roleId, email, name, userImg } = user;

    if (authUserPassword !== password) {
        return {
            error: 'Неверный пароль',
            res: null
        }
    }

    return {
        error: null,
        res: {
            id: id,
            login: login,
            roleId: roleId,
            email: email,
            name: name,
            userImg: userImg,
            session: sessions.create(user)
        },
    }

}