import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
import { useServerRequest } from "../../hooks";
import { Breadcrumbs, ErrorPageContainer, GoBackButton, H1 } from "../../components";
import { LessonCard } from "./components/LessonCard";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { USER_ROLE_ID } from "../../constants";

export const ModuleIndex = () => {
    const requestServer = useServerRequest();
    const params = useParams();
    const moduleId = params.moduleId;
    const courseId = params.courseId;

    const currentUserRoleId = useSelector(selectUserRole);
    const checkUserRole = currentUserRoleId === USER_ROLE_ID.admin || currentUserRoleId === USER_ROLE_ID.editor;


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
                <div className="course__page module">
                    <GoBackButton />
                    <H1>{currentModule.title}</H1>
                    <div className="mb-20">

                        {
                            lessons.sort((a, b) => a.order - b.order).map(({ id, moduleId, title }) =>
                                <LessonCard key={id} lessonId={id} moduleId={moduleId} courseId={currentModule.courseId} checkUserRole={checkUserRole} title={title} />
                            )
                        }

                    </div>
                    {checkUserRole && <Link className="main-btn" to={`/courses/${courseId}/modules/${moduleId}/lessons/add-new`}>Добавить новый урок</Link>}
                </div>
            </ErrorPageContainer>
            <Outlet />
        </>
    )
}