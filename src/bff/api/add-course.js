import { API_URL } from "./config";

export const addCourse = (course) =>
    fetch(`${API_URL}/courses`, {
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
