import { getModules } from "../api";

export const fetchModules = async (userSession, courseId) => {

    const modules = await getModules(courseId);

    return {
        error: null,
        res: modules,
    }
}