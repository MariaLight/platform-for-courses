import { useNavigate, useParams } from "react-router-dom";
import { EditInput, GoBackButton, H1, Upload } from "../../components"
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";

export const EditCourse = () => {
    const requestServer = useServerRequest();
    const params = useParams();
    const courseId = params.courseId;
    const [course, setCourse] = useState(null);
    const [courseTitle, setCourseTitle] = useState('');
    const [courseImg, setCourseImg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        requestServer('fetchCourse', courseId).then((res) => {
            setCourse(res.res);
            setCourseTitle(res.res.title);
            setCourseImg(res.res.imageUrl);
        });
    }, []);
    const onCourseSave = (e) => {
        e.preventDefault();
        //Загрузка фото на сервер и получение URL
        const imageUrl = courseImg;
        let newCourse = {
            ...course,
            title: courseTitle,
            imageUrl: imageUrl
        }
        requestServer('updateCourse', newCourse).then((res) => {
            alert('Курс успешно обновлён!');
            navigate('/courses');
        });
    };
    return (
        <>
            {course &&
                (
                    <div>
                        <GoBackButton />
                        <H1>Редактировать курс - {courseTitle}</H1>
                        <form onSubmit={onCourseSave}>
                            <EditInput type="text" label="Название курса" placeholder="Введите название курса" required value={courseTitle} onChange={({ target }) => setCourseTitle(target.value)} />
                            <Upload defaultImage={courseImg} />
                            <button className='main-btn'>Сохранить</button>
                        </form>
                    </div>)
            }
        </>
    )
}