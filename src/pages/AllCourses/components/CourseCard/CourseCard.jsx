import { SmallButton } from "../../../../components"

export const CourseCard = ({ id, title, imageUrl }) => {
    return (
        <>
            <div className="course__card">
                <div className="course__img">
                    {imageUrl && <img src={imageUrl} alt="" />}
                </div>
                <div className="course__content">
                    <h3 className="course__title"> {title}</h3>
                    <SmallButton data-modal="course-request">Записаться на курс</SmallButton>
                </div>


            </div>
        </>
    )
}