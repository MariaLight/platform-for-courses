import { transformCourse } from "../transformers";

export const getUserCourses = (userId) => fetch(`http://localhost:3026/user_courses/?user_id=${userId}`).then((loadedCourses) => loadedCourses.json())

    ;
