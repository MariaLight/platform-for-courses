export const getUser = async (loginToFind) => {

    const response = await fetch(`http://localhost:3026/users?login=${loginToFind}`);
    const [loadedUser] = await response.json();
    if (loadedUser) {
        return {
            id: loadedUser.id,
            login: loadedUser.login,
            roleId: loadedUser.role_id,
            name: loadedUser.name,
            email: loadedUser.email,
            userImg: loadedUser.user_img,
            registeredAt: loadedUser.registered_at,
            password: loadedUser.password,
        };
    } else {
        return null;
    }


};