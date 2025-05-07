import { Link } from "react-router-dom"
import { USER_ROLE_ID } from "../../../../constants"

export const UserRow = ({ email, name, registeredAt, roleId }) => {
    return (
        <div className="user__role">
            <div className="user__email">{email}</div>
            <div className="user__name">{name ? name : '-'}</div>
            <div className="user__role">Роль</div>
            <div className="user__date">{registeredAt}</div>
            <Link to='/edit-user'>Изменить</Link>

        </div>
    )
}