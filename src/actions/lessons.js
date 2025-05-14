import { ACTION_TYPE } from "./type"

export const loadLesson = (requestServer, lessonId) => (dispatch) => {
    requestServer('fetchLesson', lessonId).then((lessonData) => {
        dispatch(setLessonData(lessonData.res))
    })
}

export const setLessonData = (lessonData) => ({
    type: ACTION_TYPE.SET_LESSON_DATA,
    payload: lessonData
})