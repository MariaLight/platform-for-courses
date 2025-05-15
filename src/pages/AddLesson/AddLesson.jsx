import { useNavigate, useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { useEffect, useRef, useState } from "react";
import { EditInput, GoBackButton, H1, Textarea } from "../../components";
import { useSelector } from "react-redux";
import { selectLesson } from "../../selectors";

export const AddLesson = () => {
    const currentLesson = useSelector(selectLesson);

    const requestServer = useServerRequest();

    const params = useParams();
    const moduleId = params.moduleId;

    const [lessonTitle, setLessonTitle] = useState('');
    const [lessonContent, setLessonContent] = useState('');

    const [moduleLessons, setModuleLessons] = useState(null);


    const navigate = useNavigate();

    useEffect(() => {
        requestServer('fetchLessons', moduleId).then((res) => {

            setModuleLessons(res.res);
        });
    }, []);

    const editorRef = useRef(null);
    const onLessonSubmit = (e) => {
        e.preventDefault();
        let order = moduleLessons ? moduleLessons.length + 1 : 1;

        let newLesson = {
            title: lessonTitle,
            content: lessonContent,
            module_id: moduleId,
            order: order
        }
        requestServer('addNewLesson', newLesson).then((res) => {
            
            alert('Урок успешно добавлен!');
            navigate(-1);
        });
    }
    return (
        <>
            <div>
                <GoBackButton />
                <H1>Добавить урок</H1>
                <form onSubmit={onLessonSubmit}>
                    <EditInput type="text" label="Название урока" placeholder="Введите название урока" required value={lessonTitle} onChange={({ target }) => setLessonTitle(target.value)} />
                    <Textarea editorRef={editorRef} label="Контент урока" content={lessonContent} setLessonContent={setLessonContent} />
                    <button className='main-btn'>Сохранить</button>
                </form>
            </div>
        </>
    )
}
