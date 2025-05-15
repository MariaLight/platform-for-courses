export const setModule = (currentModule) =>
    fetch(`http://localhost:3026/modules/${currentModule.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            title: currentModule.title,
        })
    }).then((updatedCourse) => updatedCourse.json()).then((updatedCourse) => console.log(updatedCourse))