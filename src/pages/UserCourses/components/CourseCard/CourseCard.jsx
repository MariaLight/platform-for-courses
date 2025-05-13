import { useEffect, useState } from "react";

export const CourseCard = ({ id: course_id, requestServer }) => {

    const [course, setCourse] = useState(null);
    useEffect(() => {
        requestServer('fetchCourse', course_id).then((courseRes) => {

            setCourse(courseRes.res);
        })

    }, [requestServer]);

    console.log(course);
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
                    </div>


                </div>
            }

        </>
    )
}