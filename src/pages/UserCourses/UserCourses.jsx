import { useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../selectors';
import styles from './user-courses.module.css';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { CourseCard } from './components';
import { ErrorPageContainer, H1 } from '../../components';
import { USER_ROLE_ID } from '../../bff/constants';

export const UserCourses = () => {
    const currentUserRoleId = useSelector(selectUserRole);
    const currentUserId = useSelector(selectUserId);

    const requestServer = useServerRequest();

    const [connections, setConnections] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);


    useEffect(() => {
        requestServer('fetchUserCourses', currentUserId).then((connectionsRes) => {
            if (connectionsRes.error) {
                setErrorMessage(connectionsRes.error);
                return;
            }
            setConnections(connectionsRes.res)
        })

    }, [requestServer]);

    console.log(connections);
    return (
        <div>
            <ErrorPageContainer error={errorMessage}>
                <H1>Мои курсы</H1>
                {connections &&
                    <div className={styles.grid__connections}>
                        {connections[0].courses_id.map((item) => {
                        return <CourseCard key={item} id={item} />
                    }
                    )
                    }

                    </div>
                }

            </ErrorPageContainer>
        </div>
    )

}