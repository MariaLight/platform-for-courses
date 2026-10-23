import { API_URL } from "./config";

export const setCourse = (course) =>
    fetch(`${API_URL}/courses/${course.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            title: course.title,
            image_url: course.imageUrl,
        })
    }).then((updatedCourse) => updatedCourse.json()).then((updatedCourse) => console.log(updatedCourse))