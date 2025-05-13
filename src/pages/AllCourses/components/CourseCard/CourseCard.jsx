import { Button } from "../../../../components"

export const CourseCard = ({ id, title, imageUrl }) => {
    return (
        <>
            <div className="course__card">
                <div className="course__img">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="course__content">
                    <h3 className="course__title"> {title}</h3>
                    <Button data-modal="course-request">Записаться на курс</Button>
                </div>


            </div>
        </>
    )
}