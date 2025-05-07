import { getRoles } from "../api";
import { sessions } from "../session";
import { USER_ROLE_ID } from "../constants";

export const fetchRoles = async (userSession) => {

    const accessRoles = [USER_ROLE_ID.admin];

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: 'Доступ запрещён',
            res: null
        }
    }

    const roles = await getRoles();

    return {
        error: null,
        res: roles,
    }
}