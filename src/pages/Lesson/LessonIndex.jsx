import { Link, useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import { GoBackButton, H1 } from "../../components";
import styles from './lesson.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLesson, selectUserRole } from "../../selectors";
import { loadLesson } from "../../actions";
import { USER_ROLE_ID } from "../../bff/constants";
import { LessonEdit } from "./LessonEdit";

export const LessonIndex = () => {
    const currentLesson = useSelector(selectLesson);
    const dispatch = useDispatch();
    const requestServer = useServerRequest();

    const params = useParams();
    const lessonId = params.lessonId;

    useEffect(() => {
        dispatch(loadLesson(requestServer, lessonId));

    }, [requestServer, lessonId]);

    return (
        <>
            <div className="lesson-page">
                <GoBackButton />

                <>
                    <H1>{currentLesson.title}</H1>
                    <div className={styles.lesson__content}>
                        {currentLesson.videoUrl &&
                            <div className={styles.lesson__video}>
                                {videoUrl}
                            </div>}

                        <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} className={styles.lesson__text}>

                        </div>

                    </div>
                </>


            </div >
        </>
    )
}