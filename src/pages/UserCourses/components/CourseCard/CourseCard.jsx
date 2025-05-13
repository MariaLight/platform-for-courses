import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CourseCard = ({ id: course_id, requestServer }) => {

    const [course, setCourse] = useState(null);
    useEffect(() => {
        requestServer('fetchCourse', course_id).then((courseRes) => {

            setCourse(courseRes.res);
        })

    }, [requestServer]);

    return (
        <>
            {
                course &&
                <div className="course__card">
                    <div className="course__img">
                        <img src={course.imageUrl} alt="" />
                    </div>
                    <div className="course__content">
                        <h3 className="course__title"> {course.title}</h3>
                        <Link to={`/courses/${course_id}`} className="main-btn">Перейти</Link>
                    </div>


                </div>
            }

        </>
    )
}