import { API_URL } from "./config";

export const setModule = (currentModule) =>
    fetch(`${API_URL}/modules/${currentModule.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            title: currentModule.title,
        })
    }).then((updatedCourse) => updatedCourse.json()).then((updatedCourse) => console.log(updatedCourse))