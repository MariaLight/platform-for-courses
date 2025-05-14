import { ACTION_TYPE } from "../actions";
import { USER_ROLE_ID } from "../constants";

const initialLessonState = {
    id: "",
    title: "",
    imageUrl: "",
    content: "",
    moduleId: "",
    videoUrl: "",
    order: ""
}

export const lessonReducer = (state = initialLessonState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_LESSON_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}