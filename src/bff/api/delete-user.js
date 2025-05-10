export const deleteUser = (userId) =>
    fetch(`http://localhost:3026/users/${userId}`, {
        method: "DELETE"
    })