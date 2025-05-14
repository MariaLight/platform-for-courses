import { transformLesson } from "../transformers";

export const getLesson = async (idToFind) => {

    const response = await fetch(`http://localhost:3026/lessons/${idToFind}`);

    const loadedLesson = await response.json();
    if (loadedLesson) {
        return transformLesson(loadedLesson);
    } else {
        return null;
    }
};