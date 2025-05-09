import { authorize, fetchRoles, fetchUser, fetchUsers, logout, register, updateUser } from './operations';

export const server = {
    logout,
    authorize,
    register,
    fetchRoles,
    fetchUsers,
    fetchUser,
    updateUser
}