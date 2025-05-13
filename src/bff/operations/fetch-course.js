import { getCourseById } from "../api";

export const fetchCourse= async (userSession, courseId) => {
    const course = await getCourseById(courseId);

    return {
        error: null,
        res: course,
    }
}