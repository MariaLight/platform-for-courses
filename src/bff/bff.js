import { addUser, getUser } from './bff-functions';
import { sessions } from './session';

export const server = {
    async logout(session) {
        sessions.remove(session);
    },
    async authorize(authUserLogin, authUserPassword) {

        const user = await getUser(authUserLogin);

        if (!user) {
            return {
                error: 'Пользователь не найден',
                res: null
            }
        }

        if (authUserPassword !== user.password) {
            return {
                error: 'Неверный пароль',
                res: null
            }
        }

        return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                email: user.email,
                name: user.name,
                userImg: user.user_img,
                session: sessions.create(user)
            },
        }

    },

    async register(regLogin, regPassword) {
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
}