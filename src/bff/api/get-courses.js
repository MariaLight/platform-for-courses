import { transformCourse } from "../transformers";

export const getCourses = () => fetch("http://localhost:3026/courses").then((loadedCourses) => loadedCourses.json())
.then((loadedCourses) => loadedCourses && loadedCourses.map(transformCourse))
;
