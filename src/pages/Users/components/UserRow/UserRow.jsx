import { Link } from "react-router-dom"

export const UserRow = ({email, name, registeredAt, roleId}) => {
    return (
        <div className="user__role">
            <div className="user__email">{email}</div>
            <div className="user__name">{name ? name : '-'}</div>
            <div className="user__role">{}</div>
            <div className="user__date"></div>
            <Link to='/edit-user'>Изменить</Link>

        </div>
    )
}