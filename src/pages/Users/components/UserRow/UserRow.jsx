import { Link } from "react-router-dom"
import { USER_ROLE_ID } from "../../../../constants"
import styles from '../../users.module.css'

export const UserRow = ({ email, name, registeredAt, roleId, roles }) => {
    return (
        <div className="user__role">
            <div className={styles.table__email}>{email}</div>
            <div className={styles.table__name}>{name ? name : '-'}</div>
            <div className={styles.table__role}>{roles[roleId].name}</div>
            <div className={styles.table__date}>{registeredAt}</div>
            <Link className="main__btn" to='/edit-user'>Изменить</Link>

        </div>
    )
}