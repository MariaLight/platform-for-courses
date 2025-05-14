import { getLessons } from "../api";

export const fetchLessons = async (userSession, moduleId) => {

    const lessons = await getLessons(moduleId);

    return {
        error: null,
        res: lessons,
    }
}