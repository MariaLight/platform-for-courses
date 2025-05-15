import { useNavigate, useParams } from "react-router-dom";
import { EditInput, GoBackButton, H1, Upload } from "../../components"
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";

export const EditModule = () => {
    const requestServer = useServerRequest();
    const params = useParams();
    const courseId = params.courseId;
    const moduleId = params.moduleId;
    const [currentModule, setModule] = useState(null);
    const [moduleTitle, setModuleTitle] = useState('');
    const [moduleImg, setModuleImg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        requestServer('fetchCurrentModule', moduleId).then((res) => {
            setModule(res.res);
            setModuleTitle(res.res.title);
            setModuleImg(res.res.imageUrl);
        });
    }, []);
    const onModuleSave = (e) => {
        e.preventDefault();
        let newModule = {
            ...currentModule,
            title: moduleTitle
        }
        requestServer('updateModule', newModule).then((res) => {
            console.log(res);
            alert('Модуль успешно обновлён!');
            navigate(-1);
        });
    };
    return (
        <>
            {currentModule &&
                (
                    <div>
                        <GoBackButton />
                        <H1>Редактировать модуль - {moduleTitle}</H1>
                        <form onSubmit={onModuleSave}>
                            <EditInput type="text" label="Название модуля" placeholder="Введите название модуля" required value={moduleTitle} onChange={({ target }) => setModuleTitle(target.value)} />
                            <button className='main-btn'>Сохранить</button>
                        </form>
                    </div>
                )}
        </>
    )
}