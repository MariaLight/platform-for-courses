import { getUsers } from "../api";
import { sessions } from "../session";
import { USER_ROLE_ID } from "../constants";

export const fetchUsers = async (userSession) => {

    const accessRoles = [USER_ROLE_ID.admin];

    
    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: 'Доступ запрещён',
            res: null
        }
    }

    const users = await getUsers();

    return {
        error: null,
        res: users,
    }
}