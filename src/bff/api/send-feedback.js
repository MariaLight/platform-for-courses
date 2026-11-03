import { API_URL } from "./config";

export const sendFeedback = (name, email, message, courseTitle) => fetch(`${API_URL}/feedback`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name,
        email,
        message,
        course_title: courseTitle || null,
    }),
}).then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.error || 'не отправилось');
    }
    return data;
});
