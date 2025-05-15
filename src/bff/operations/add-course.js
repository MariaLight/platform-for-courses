import { addCourse } from "../api";

export const addNewCourse = async (userSession, course) => {

    const newCourse = await addCourse(course);

    return {
        error: null,
        res: newCourse,
    }
}  