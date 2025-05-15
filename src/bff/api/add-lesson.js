export const addLesson = (lesson) =>
    fetch("http://localhost:3026/lessons", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            ...lesson
        })
    }).then((createdLesson) => createdLesson.json())
