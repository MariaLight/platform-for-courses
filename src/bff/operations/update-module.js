import { setModule } from "../api";

export const updateModule = async (userSession, currentModule) => {
    setModule(currentModule);

    return {
        error: null,
        res: true
    };
}