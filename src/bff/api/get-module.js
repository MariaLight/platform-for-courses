import { transformModule } from "../transformers";

export const getModuleById = async (idToFind) => {

    const response = await fetch(`http://localhost:3026/modules/${idToFind}`);

    const loadedModule = await response.json();
    if (loadedModule) {
        return transformModule(loadedModule);
    } else {
        return null;
    }
};