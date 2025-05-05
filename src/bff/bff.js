import { addUser, getUser, createSession } from './bff-functions';
import { sessions } from './session';

export const server = {
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
                id: user.login,
                login: user.id,
                roleId: user.role_id,
                email: user.email,
                name: user.name,
                userImg: user.userImg,
                session: sessions.create(user)
            },
        }

    },

    async register(regLogin, regPassword) {
        const user = getUser(regLogin);


        if (user) {
            return {
                error: 'Логин занят',
                res: null
            }
        }

        await addUser(regLogin, regPassword);

        const session = {
            logout() {
                Object.keys(session).forEach((key) => delete session[key])
            },
            removeComment() {
                console.log("Удаление коммента")
            },

        }
        return {
            error: null,
            res: session,
        }
    }
}