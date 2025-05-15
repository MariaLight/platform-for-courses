import { Link } from 'react-router-dom'
import styles from '../../Course/components/ModuleCard/module-card.module.css'

export const LessonCard = ({ lessonId, moduleId, courseId, title, checkUserRole }) => {
    return (
        <>
            <div className={styles.module__card}>
                <div className={styles.module__title}>{title}</div>
                <div className={styles.module__btns}>
                    <Link className='main-btn' to={`/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`}>Перейти</Link>
                    {checkUserRole && <Link className='main-btn white-btn' to={`/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}/edit`}>Изменить</Link>}
                </div>
            </div>

        </>
    )
}