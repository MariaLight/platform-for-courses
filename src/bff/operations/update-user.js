import { setUser } from "../api";

export const updateUser = async (userSession, user) => {
    setUser(user);
    
    return {
        error: null,
        res: true
    };
}