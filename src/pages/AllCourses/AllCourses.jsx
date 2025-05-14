import { useState, useEffect } from "react";
import { H1, ErrorPageContainer } from "../../components";
import { useServerRequest } from "../../hooks";
import { CourseCard } from "./components";
import './modal';

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

                <div className="courses__grid">

                    {courses.map(({ id, title, imageUrl }) =>
                        <CourseCard key={id} id={id} title={title} imageUrl={imageUrl} />
                    )}
                </div>
            </ErrorPageContainer>

            <div className="modal" id="course-request">
                <div className="modal__inner"><button class="modal__close btn-reset" type="button" data-modal-close>Закрыть</button>
                    <div className="modal__content">
                        <div className="modal-form">
                            <h3 className="modal-form__title title">
                                Остаьте заявку
                            </h3>
                            <div className="modal__description">
                                Менеджер с вами свяжется
                            </div>
                            <form action="" className="modal__platform">

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}