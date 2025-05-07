import { addUser, getUser } from './api-functions';
import { authorize, logout, register } from './operations';
import { sessions } from './session';

export const server = {
    logout,
    authorize,
    register
}