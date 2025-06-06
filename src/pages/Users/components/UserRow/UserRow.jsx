import { Link } from "react-router-dom"
import { USER_ROLE_ID } from "../../../../constants"
import styles from '../../users.module.css'

export const UserRow = ({ userId, email, name, registeredAt, roleId, roles }) => {
    return (
        <div className={styles.user__row}>
            <div className={styles.table__email}>{email}</div>
            <div className={styles.table__name}>{name ? name : '-'}</div>
            <div className={styles.table__role}>{roles.find(({ id }) => id === roleId).name}</div>
            <div className={styles.table__date}>{registeredAt}</div>
            <Link className="main-btn" to={`/edit-profile/${userId}`}>Изменить</Link>

        </div>
    )
}