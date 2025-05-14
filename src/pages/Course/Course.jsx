import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useServerRequest } from "../../hooks";
import { Breadcrumbs, ErrorPageContainer, H1 } from "../../components";
import { ModuleCard } from "./components/ModuleCard/ModuleCard";

export const Course = () => {
    const requestServer = useServerRequest();

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
                    <Breadcrumbs />

                    <H1>{course.title}</H1>
                    <div>

                        {
                            modules.sort((a, b) => a.order - b.order).map(({ id, courseId, title }) =>
                                <ModuleCard key={id} moduleId={id} title={title} />
                            )
                        }

                    </div>
                </div>
            </ErrorPageContainer>
        </>
    )
}