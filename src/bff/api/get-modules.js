import { transformModule } from "../transformers";
import { API_URL } from "./config";

export const getModules = (courseId) => fetch(`${API_URL}/modules?course_id=${courseId}`).then((loadedModules) => loadedModules.json())
    .then((loadedModules) => loadedModules && loadedModules.map(transformModule))
    ;
