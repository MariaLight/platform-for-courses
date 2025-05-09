import { getUserById } from "../api";

export const fetchUser = async (userId) => {
    const user = await getUserById(userId);

    return {
        error: null,
        res: user,
    }
}