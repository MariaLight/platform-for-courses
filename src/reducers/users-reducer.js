import { ACTION_TYPE } from "../actions"

const initialUsersState = []

export const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USERS: {
            return [
                ...action.payload
            ]
        }
        default:
            return state;
    }
}