import { transformModule } from "../transformers";

export const getModules = (courseId) => fetch(`http://localhost:3026/modules?course_id=${courseId}`).then((loadedModules) => loadedModules.json())
    .then((loadedModules) => loadedModules && loadedModules.map(transformModule))
    ;
