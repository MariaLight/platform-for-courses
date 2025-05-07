import styles from './profile.module.css'
import { H1 } from '../../components'
import { useSelector } from 'react-redux'
import { selectUserName } from '../../selectors'

export const Profile = () => {
    const name = useSelector(selectUserName);
    return (
        <div className={styles.content}>
            <H1>Здравствуйте {name && `, ${name}`}!</H1>
        </div>
    )
}