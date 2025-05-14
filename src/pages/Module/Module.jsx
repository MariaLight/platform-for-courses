import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useServerRequest } from "../../hooks";
import { Breadcrumbs, ErrorPageContainer, H1 } from "../../components";
import { LessonCard } from "./components/LessonCard";

export const Module = () => {
    const requestServer = useServerRequest();

    const params = useParams();
    const moduleId = params.moduleId;

    const [currentModule, setCurrentModule] = useState({});
    const [lessons, setLessons] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {

        Promise.all(
            [requestServer('fetchCurrentModule', moduleId),
            requestServer('fetchLessons', moduleId)]
        ).then(([moduleRes, lessonRes]) => {
            if (moduleRes.error || lessonRes.error) {
                setErrorMessage(moduleRes.error || lessonRes.error);
                return;
            }
            setCurrentModule(moduleRes.res);
            setLessons(lessonRes.res);
        })

    }, [requestServer]);
    return (
        <>
            <ErrorPageContainer error={errorMessage}>
                <div className="course__page">
                    <Breadcrumbs />
                    <H1>{currentModule.title}</H1>
                    <div>

                        {
                            lessons.sort((a, b) => a.order - b.order).map(({ id, moduleId, courseId, title }) =>
                                <LessonCard key={id} lessonId={id} moduleId={moduleId} courseId={currentModule.courseId} title={title} />
                            )
                        }

                    </div>
                </div>
            </ErrorPageContainer>
        </>
    )
}