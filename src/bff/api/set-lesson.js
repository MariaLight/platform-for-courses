import { API_URL } from "./config";

export const setLesson = (lesson) =>
    fetch(`${API_URL}/lessons/${lesson.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            title: lesson.title,
            content: lesson.content,
        })
    }).then((updatedLesson) => updatedLesson.json()).then((updatedLesson) => console.log(updatedLesson))