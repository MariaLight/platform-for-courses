import { transformCourse } from "../transformers";
import { API_URL } from "./config";

export const getUserCourses = (userId) => fetch(`${API_URL}/user_courses?user_id=${userId}`).then((loadedCourses) => loadedCourses.json())

    ;
