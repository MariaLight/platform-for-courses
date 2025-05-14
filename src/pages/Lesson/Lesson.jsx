import { Link, useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { useEffect } from "react";
import { GoBackButton, H1 } from "../../components";
import styles from './lesson.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLesson, selectUserRole } from "../../selectors";
import { loadLesson } from "../../actions";
import { USER_ROLE_ID } from "../../bff/constants";
import { LessonEdit } from "./LessonEdit";

export const Lesson = () => {
    const currentLesson = useSelector(selectLesson);
    const dispatch = useDispatch();
    const requestServer = useServerRequest();

    const params = useParams();
    const lessonId = params.lessonId;

    const currentUserRole = useSelector(selectUserRole);

    const isEditing = useMatch('lessons/:lessonId/edit');

    useEffect(() => {
        dispatch(loadLesson(requestServer, lessonId));

    }, [requestServer, lessonId]);
    return (
        <>
            <div className="lesson-page">
                <GoBackButton />
                {isEditing ? (
                    <LessonEdit currentLesson={currentLesson} />
                ) :
                    (
                        <>
                            <H1>{currentLesson.title}</H1>
                            {(currentUserRole === USER_ROLE_ID.admin || currentUserRole === USER_ROLE_ID.editor) && <Link to={``}>Изменить</Link>}
                            <div className={styles.lesson__content}>
                                {currentLesson.videoUrl &&
                                    <div className={styles.lesson__video}>
                                        {videoUrl}
                                    </div>}

                                <div className={styles.lesson__text}>
                                    {currentLesson.content}
                                </div>

                            </div>
                        </>
                    )
                }

            </div >
        </>
    )
}