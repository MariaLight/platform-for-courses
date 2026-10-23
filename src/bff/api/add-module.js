import { API_URL } from "./config";

export const addModule = (moduleObject) =>
    fetch(`${API_URL}/modules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            ...moduleObject
        })
    }).then((createdModule) => createdModule.json())
