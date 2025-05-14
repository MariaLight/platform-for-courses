import { useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import { ErrorPageContainer, GoBackButton, H1 } from "../../components";
import styles from './lesson.module.css';

export const Lesson = () => {
    const requestServer = useServerRequest();

    const params = useParams();
    const lessonId = params.lessonId;

    const [currentLesson, setCurrentLesson] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        requestServer('fetchCurrentLesson', lessonId).then((lessonRes) => {
            if (lessonRes.error) {
                setErrorMessage(lessonRes.error);
                return;
            }
            setCurrentLesson(lessonRes.res);
        })

    }, [requestServer]);
    return (
        <>
            <ErrorPageContainer error={errorMessage}>
                <div className="lesson-page">
                    <GoBackButton />
                    <H1>{currentLesson.title}</H1>
                    <div className={styles.lesson__content}>

                    </div>
                </div>
            </ErrorPageContainer>
        </>
    )
}