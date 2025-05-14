import { transformLesson } from "../transformers";

export const getLessons = (moduleId) => fetch(`http://localhost:3026/lessons?module_id=${moduleId}`).then((loadedLessons) => loadedLessons.json())
    .then((loadedLessons) => loadedLessons && loadedLessons.map(transformLesson))
    ;
