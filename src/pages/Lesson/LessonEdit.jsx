import { useNavigate, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { useEffect, useRef, useState } from "react";
import { EditInput, GoBackButton, H1, Textarea } from "../../components";
import {useSelector } from "react-redux";
import { selectLesson } from "../../selectors";

export const LessonEdit = () => {
    const currentLesson = useSelector(selectLesson);

    const requestServer = useServerRequest();

    const params = useParams();
    const lessonId = params.lessonId;
    const courseId = params.courseId;
    const moduleId = params.moduleId;

    const [lesson, setLesson] = useState(null);
    const [lessonTitle, setLessonTitle] = useState('');
    const [lessonContent, setLessonContent] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        requestServer('fetchLesson', lessonId).then((res) => {
            setLesson(res.res);
            setLessonTitle(res.res.title);
            setLessonContent(res.res.content);
        });
    }, []);

    const editorRef = useRef(null);
    const onLessonSubmit = (e) => {
        e.preventDefault();

        let newLesson = {
            ...lesson,
            title: lessonTitle,
            content: lessonContent
        }
        requestServer('updateLesson', newLesson).then((res) => {

            alert('Урок успешно обновлён!');
            navigate(-1);
        });
    }
    return (
        <>
            <div>
                <GoBackButton />
                <H1>Редактировать урок - {lessonTitle}</H1>
                <form onSubmit={onLessonSubmit}>
                    <EditInput type="text" label="Название урока" placeholder="Введите название урока" required value={lessonTitle} onChange={({ target }) => setLessonTitle(target.value)} />
                    <Textarea editorRef={editorRef} label="Контент урока" content={lessonContent} setLessonContent={setLessonContent} />
                    <button className='main-btn'>Сохранить</button>
                </form>
            </div>
        </>
    )
}