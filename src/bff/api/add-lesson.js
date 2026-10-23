import { API_URL } from "./config";

export const addLesson = (lesson) =>
    fetch(`${API_URL}/lessons`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            ...lesson
        })
    }).then((createdLesson) => createdLesson.json())
