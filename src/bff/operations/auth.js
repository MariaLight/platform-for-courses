import { getUser } from "../api";
import { sessions } from "../session";

export const authorize = async (authUserEmail, authUserPassword) => {

    const user = await getUser(authUserEmail);

    if (!user) {
        return {
            error: 'Пользователь не найден',
            res: null
        }
    }
    const { id, password, roleId, email, name, userImg } = user;

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
            roleId: roleId,
            email: email,
            name: name,
            userImg: userImg,
            session: sessions.create(user)
        },
    }

}