import { transformLesson } from "../transformers";
import { API_URL } from "./config";

export const getLessons = (moduleId) => fetch(`${API_URL}/lessons?module_id=${moduleId}`).then((loadedLessons) => loadedLessons.json())
    .then((loadedLessons) => loadedLessons && loadedLessons.map(transformLesson))
    ;
