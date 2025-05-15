import { addModule } from "../api";

export const addNewModule = async (userSession, moduleObject) => {

    const newModule = await addModule(moduleObject);

    return {
        error: null,
        res: newModule,
    }
}  