import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useServerRequest } from "../../hooks";

export const Course = () => {
    const requestServer = useServerRequest();

    const params = useParams();
    const courseId = params.courseId;

    const [course, setCourse] = useState(null);
    useEffect(() => {
        Promise.all(
            [requestServer('fetchCourse', courseId),
            requestServer('fetchModules', courseId)]

        )
            .then(([courseRes, modulesRes]) => {

                setCourse(courseRes.res);
            })

    }, [requestServer]);
    return (
        <>
            <div className="course__page">
                {course.title}
            </div>
        </>
    )
}