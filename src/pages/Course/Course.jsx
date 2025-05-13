import { useParams } from "react-router-dom"

export const Course = () => {
    const params = useParams();
    const courseId = params.courseId;
    return (
        <>
            <div className="course__page">
                {courseId}
            </div>
        </>
    )
}