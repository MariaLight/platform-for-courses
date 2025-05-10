import { authorize, fetchRoles, fetchUser, fetchUsers, logout, register, removeUser, updateUser } from './operations';

export const server = {
    logout,
    authorize,
    register,
    fetchRoles,
    fetchUsers,
    fetchUser,
    updateUser,
    removeUser
}