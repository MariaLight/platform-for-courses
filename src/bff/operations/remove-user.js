import { deleteUser } from "../api";
import { USER_ROLE_ID } from "../constants";
import { sessions } from "../session";

export const removeUser = async (userSession, userId) => {
    const accessRoles = [USER_ROLE_ID.admin];

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: 'Доступ запрещён',
            res: null
        }
    }
    deleteUser(userId);

    return {
        error: null,
        res: true
    };
}