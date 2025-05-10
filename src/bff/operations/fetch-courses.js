import { getCourses } from "../api";

export const fetchCourses = async (userSession) => {

    const courses = await getCourses();

    return {
        error: null,
        res: courses,
    }
}