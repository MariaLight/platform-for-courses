import { getUserCourses } from "../api";

export const fetchUserCourses = async (userSession, userId) => {

    const courses = await getUserCourses(userId);

    return {
        error: null,
        res: courses,
    }
}