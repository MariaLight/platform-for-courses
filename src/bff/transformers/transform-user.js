export const transformUser = (dbUser) => ({

    id: dbUser.id,
    roleId: dbUser.role_id,
    name: dbUser.name,
    email: dbUser.email,
    userImg: dbUser.user_img,
    registeredAt: dbUser.registered_at,
    password: dbUser.password,

})