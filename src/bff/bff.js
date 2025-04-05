import { addUser, getUser, createSession } from './bff-functions';

export const server = {
    async authorize(authUserLogin, authUserPassword) {

        const user = getUser(authUserLogin);

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

        const session = createSession()
        return {
            error: null,
            res: session,
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