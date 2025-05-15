import { addLesson } from "../api";

export const addNewLesson = async (userSession, lesson) => {

    const newLesson = await addLesson(lesson);

    return {
        error: null,
        res: newLesson,
    }
}  