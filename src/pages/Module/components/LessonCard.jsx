import { Link } from 'react-router-dom'
import styles from '../../Course/components/ModuleCard/module-card.module.css'

export const LessonCard = ({ lessonId, moduleId, courseId, title }) => {
    return (
        <>
            <div className={styles.module__card}>
                <div className={styles.module__title}>{title}</div>
                <Link className='main-btn' to={`/courses/${courseId}/${moduleId}/${lessonId}`}>Перейти</Link>
            </div>

        </>
    )
}