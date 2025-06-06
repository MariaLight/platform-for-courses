import { ACTION_TYPE } from "../actions";
import { USER_ROLE_ID } from "../constants";

const initialUserState = {
    session: null,
    id: null,
    email: null,
    name: null,
    userImg: null,
    roleId: USER_ROLE_ID.reader,
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case ACTION_TYPE.CHANGE_USER_INFO: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case ACTION_TYPE.LOGOUT: {
            return initialUserState
        }
        default:
            return state;
    }
}