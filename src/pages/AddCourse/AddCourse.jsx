import { useState } from 'react';
import { H1, EditInput, GoBackButton, Upload } from '../../components'
import { useServerRequest } from '../../hooks';
import { Navigate, useNavigate } from 'react-router-dom';

export const AddCourse = () => {

    const requestServer = useServerRequest();
    const [courseTitle, setCourseTitle] = useState('');
    const navigate = useNavigate();
    const onCourseSave = (e) => {
        e.preventDefault();
        //Загрузка фото на сервер и получение URL
        const imageUrl = '';
        let newCourse = {
            title: courseTitle,
            imageUrl: imageUrl
        }
        requestServer('addNewCourse', newCourse).then((res) => {

            alert('Курс успешно добавлен!');
            navigate('/courses');
        });
    };
    return (
        <>
            <GoBackButton />
            <H1>Добавить новый курс</H1>
            <form onSubmit={onCourseSave}>
                <EditInput type="text" label="Название курса" placeholder="Введите название курса" required value={courseTitle} onChange={({ target }) => setCourseTitle(target.value)} />
                <Upload />
                <button className='main-btn'>Сохранить</button>
            </form>
        </>
    )
}