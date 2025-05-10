import { useState, useEffect } from "react";
import { H1, ErrorPageContainer } from "../../components";
import { useServerRequest } from "../../hooks";
import { CourseCard } from "./components";

export const AllCourses = () => {
    const requestServer = useServerRequest();

    const [courses, setCourses] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    useEffect(() => {
        requestServer('fetchCourses').then((coursesRes) => {
            if (coursesRes.error) {
                setErrorMessage(coursesRes.error);
                return;
            }

            setCourses(coursesRes.res);
        });

    }, [requestServer]);

    return (
        <div>
            <ErrorPageContainer error={errorMessage}>
                <H1>Каталог</H1>

                <div className="">
                    
                    {courses.map(({ id, title, imageUrl }) =>
                        <CourseCard key={id} id={id} title={title} imageUrl={imageUrl} />
                    )}
                </div>
            </ErrorPageContainer>
        </div>
    )
}