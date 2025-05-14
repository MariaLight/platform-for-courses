import { getLesson } from "../api";

export const fetchLesson = async (userSession, lessonId) => {
    const lesson = await getLesson(lessonId);

    return {
        error: null,
        res: lesson,
    }
}