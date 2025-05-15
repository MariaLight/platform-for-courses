import { useEffect, useState } from 'react';
import { H1, EditInput, GoBackButton, Upload } from '../../components'
import { useServerRequest } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';

export const AddModule = () => {
    const params = useParams();
    const courseId = params.courseId;
    const [courseModules, setCourseModules] = useState(null);
    const requestServer = useServerRequest();
    const [moduleTitle, setModuleTitle] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        requestServer('fetchModules', courseId).then((res) => {
            console.log(res);
            setCourseModules(res.res);
        });
    }, []);
    const onModuleSave = (e) => {
        e.preventDefault();
        let order = courseModules ? courseModules.length + 1 : 1;
        let newModule = {
            title: moduleTitle,
            course_id: courseId,
            order: order
        }
        requestServer('addNewModule', newModule).then((res) => {
            console.log(res);
            alert('Модуль успешно добавлен!');
            navigate(-1);
        });
    };
    return (
        <>
            <GoBackButton />
            <H1>Добавить новый модуль</H1>
            <form onSubmit={onModuleSave}>
                <EditInput type="text" label="Название модуля" placeholder="Введите название модуля" required value={moduleTitle} onChange={({ target }) => setModuleTitle(target.value)} />
                <button className='main-btn'>Сохранить</button>
            </form>
        </>
    )
}