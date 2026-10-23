import { transformCourse } from "../transformers";
import { API_URL } from "./config";

export const getCourses = () => fetch(`${API_URL}/courses`).then((loadedCourses) => loadedCourses.json())
.then((loadedCourses) => loadedCourses && loadedCourses.map(transformCourse))
;
