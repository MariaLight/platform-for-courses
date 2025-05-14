import { getModuleById } from "../api";

export const fetchCurrentModule = async (userSession, moduleId) => {
    const currentModule = await getModuleById(moduleId);

    return {
        error: null,
        res: currentModule,
    }
}