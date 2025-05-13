import { transformCourse } from "../transformers";

export const getCourseById = async (idToFind) => {

    const response = await fetch(`http://localhost:3026/courses/${idToFind}`);

    const loadedCourse = await response.json();
    console.log(transformCourse(loadedCourse))
    if (loadedCourse) {
        return transformCourse(loadedCourse);
    } else {
        return null;
    }
};