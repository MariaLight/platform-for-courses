export const addCourse = (course) =>
    fetch("http://localhost:3026/courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            title: course.title,
            image_url: course.imageUrl,
            published_at: new Date().toLocaleDateString(),
        })
    }).then((createdCourse) => createdCourse.json())
