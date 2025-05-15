import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { useServerRequest } from "../../hooks";
import { Breadcrumbs, ErrorPageContainer, GoBackButton, H1 } from "../../components";
import { ModuleCard } from "./components/ModuleCard/ModuleCard";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { USER_ROLE_ID } from "../../constants";

export const CourseIndex = () => {
    const requestServer = useServerRequest();
    const currentUserRoleId = useSelector(selectUserRole);
    const checkUserRole = currentUserRoleId === USER_ROLE_ID.admin || currentUserRoleId === USER_ROLE_ID.editor;

    const params = useParams();
    const courseId = params.courseId;

    const [course, setCourse] = useState({});
    const [modules, setModules] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {

        Promise.all(
            [requestServer('fetchCourse', courseId),
            requestServer('fetchModules', courseId)]
        ).then(([courseRes, modulesRes]) => {
            if (courseRes.error || modulesRes.error) {
                setErrorMessage(courseRes.error || modulesRes.error);
                return;
            }
            setCourse(courseRes.res);
            setModules(modulesRes.res);
        })

    }, [requestServer]);
    return (
        <>
            <ErrorPageContainer error={errorMessage}>
                <div className="course__page">
                    {/* <Breadcrumbs /> */}
                    <GoBackButton />

                    <H1>{course.title}</H1>
                    <div>

                        {
                            modules.sort((a, b) => a.order - b.order).map(({ id, courseId, title }) =>
                                <ModuleCard key={id} moduleId={id} courseId={courseId} checkUserRole={checkUserRole} title={title} />
                            )
                        }

                    </div>
                </div>
            </ErrorPageContainer>
        </>
    )
}