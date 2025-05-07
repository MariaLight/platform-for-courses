import { sessions } from "../session";
export const logout = async (session) => {
    sessions.remove(session);
}