import { authorize, fetchCourses, fetchRoles, fetchUser, fetchUserCourses, fetchUsers, logout, register, removeUser, updateUser, fetchCourse } from './operations';

export const server = {
    logout,
    authorize,
    register,
    fetchRoles,
    fetchUsers,
    fetchUser,
    updateUser,
    removeUser,
    fetchUserCourses,
    fetchCourses,
    fetchCourse
}