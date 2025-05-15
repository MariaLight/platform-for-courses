export const setLesson = (lesson) =>
    fetch(`http://localhost:3026/lessons/${lesson.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            title: lesson.title,
            content: lesson.content,
        })
    }).then((updatedLesson) => updatedLesson.json()).then((updatedLesson) => console.log(updatedLesson))