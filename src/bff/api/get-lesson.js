import { transformLesson } from "../transformers";
import { API_URL } from "./config";

export const getLesson = async (idToFind) => {

    const response = await fetch(`${API_URL}/lessons/${idToFind}`);

    const loadedLesson = await response.json();
    if (loadedLesson) {
        return transformLesson(loadedLesson);
    } else {
        return null;
    }
};