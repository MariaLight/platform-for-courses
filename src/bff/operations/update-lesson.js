import { setLesson } from "../api";

export const updateLesson = async (userSession, lesson) => {
    setLesson(lesson);

    return {
        error: null,
        res: true
    };
}