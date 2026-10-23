import { transformModule } from "../transformers";
import { API_URL } from "./config";

export const getModuleById = async (idToFind) => {

    const response = await fetch(`${API_URL}/modules/${idToFind}`);

    const loadedModule = await response.json();
    if (loadedModule) {
        return transformModule(loadedModule);
    } else {
        return null;
    }
};