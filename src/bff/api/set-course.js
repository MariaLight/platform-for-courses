export const setCourse = (course) =>
    fetch(`http://localhost:3026/courses/${course.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            title: course.title,
            image_url: course.imageUrl,
        })
    }).then((updatedCourse) => updatedCourse.json()).then((updatedCourse) => console.log(updatedCourse))