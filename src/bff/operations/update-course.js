import { setCourse } from "../api";

export const updateCourse = async (userSession, course) => {
    setCourse(course);

    return {
        error: null,
        res: true
    };
}