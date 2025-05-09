export const setUser = (user) =>
    fetch(`http://localhost:3026/users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            role_id: user.roleId,
            user_img: user.userImg,
            name: user.name
        })
    }).then((updatedUser) => updatedUser.json()).then((updatedUser) => console.log(updatedUser))