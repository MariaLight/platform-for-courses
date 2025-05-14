import { useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import { GoBackButton, H1 } from "../../components";
import styles from './lesson.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectLesson } from "../../selectors";
import { loadLesson } from "../../actions";

export const LessonEdit = () => {
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
                <Input defaultValue={currentLesson.title} />

                <div className={styles.lesson__content}>
                    {currentLesson.videoUrl &&
                        <div className={styles.lesson__video}>
                            {currentLesson.videoUrl}
                        </div>}

                    <div className={styles.lesson__text}>
                        {currentLesson.content}
                    </div>

                </div>
            </div>
        </>
    )
}