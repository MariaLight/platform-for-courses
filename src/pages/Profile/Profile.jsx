import styles from './profile.module.css'
import { H1 } from '../../components'
import { useSelector } from 'react-redux'
import { selectUserId, selectUserName } from '../../selectors'
import { Link } from 'react-router-dom'

export const Profile = () => {
    const name = useSelector(selectUserName);
    const currentUserId = useSelector(selectUserId);

    return (
        <div className={styles.content}>
            <H1>Здравствуйте{name && `, ${name}`}!</H1>
            <Link to={`/edit-profile/${currentUserId}`} className={`${styles.form__btn} main-btn`}>Редактировать профиль</Link>

        </div >
    )
}