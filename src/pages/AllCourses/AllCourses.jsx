import { useState, useEffect } from "react";
import { H1, ErrorPageContainer, FeedbackForm } from "../../components";
import { useServerRequest } from "../../hooks";
import { CourseCard } from "./components";

export const AllCourses = () => {
    const requestServer = useServerRequest();

    const [courses, setCourses] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);

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

                <div className="courses__grid">

                    {courses.map(({ id, title, imageUrl }) =>
                        <CourseCard
                            key={id}
                            id={id}
                            title={title}
                            imageUrl={imageUrl}
                            onEnroll={() => setSelectedCourse(title)}
                        />
                    )}
                </div>
            </ErrorPageContainer>

            {selectedCourse && (
                <div className="modal modal--active" onClick={() => setSelectedCourse(null)}>
                    <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
                        <button className="modal__close btn-reset" type="button" onClick={() => setSelectedCourse(null)}>Закрыть</button>
                        <div className="modal__content">
                            <div className="modal-form">
                                <h3 className="modal-form__title title">
                                    Оставьте заявку
                                </h3>
                                <div className="modal__description">
                                    Менеджер с вами свяжется
                                </div>
                                <FeedbackForm courseTitle={selectedCourse} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
