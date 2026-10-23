import { transformCourse } from "../transformers";
import { API_URL } from "./config";

export const getCourseById = async (idToFind) => {

    const response = await fetch(`${API_URL}/courses/${idToFind}`);

    const loadedCourse = await response.json();
    if (loadedCourse) {
        return transformCourse(loadedCourse);
    } else {
        return null;
    }
};