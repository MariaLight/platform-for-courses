import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CourseCard = ({ course_id, requestServer, checkUserRole }) => {
    console.log(course_id)

    const [course, setCourse] = useState(null);
    useEffect(() => {
        requestServer('fetchCourse', course_id).then((courseRes) => {
console.log(courseRes)
            setCourse(courseRes.res);
        })

    }, [requestServer]);
    return (
        <>
            {
                course &&
                <div className="course__card">
                    <div className="course__img">
                        {course.imageUrl && <img src={course.imageUrl} alt="" />}
                    </div>
                    <div className="course__content">
                        <h3 className="course__title"> {course.title}</h3>
                        <div className="course__btns">
                            <Link to={`/courses/${course_id}`} className="main-btn">Перейти</Link>
                            {checkUserRole && <Link className='main-btn white-btn' to={`/courses/${course_id}/edit`}>Изменить</Link>}
                        </div>
                    </div>


                </div>
            }

        </>
    )
}