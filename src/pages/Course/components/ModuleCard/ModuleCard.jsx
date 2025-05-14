import { Link } from 'react-router-dom'
import styles from './module-card.module.css'

export const ModuleCard = ({ moduleId, courseId, title }) => {
    return (
        <>
            <div className={styles.module__card}>
                <div className={styles.module__title}>{title}</div>
                <Link className='main-btn' to={`/courses/${courseId}/modules/${moduleId}`}>Перейти</Link>
            </div>

        </>
    )
}