import { useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../selectors';
import { useServerRequest } from '../../hooks';
import { useEffect, useState } from 'react';
import { CourseCard } from './components';
import { Button, ErrorPageContainer, H1 } from '../../components';
import { USER_ROLE_ID } from '../../bff/constants';
import { Link, Outlet } from 'react-router-dom';

export const UserCourses = () => {
    const currentUserRoleId = useSelector(selectUserRole);
    const currentUserId = useSelector(selectUserId);

    const requestServer = useServerRequest();

    const [connections, setConnections] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const checkUserRole = currentUserRoleId === USER_ROLE_ID.admin || currentUserRoleId === USER_ROLE_ID.editor;

    useEffect(() => {
        if (checkUserRole) {
            requestServer('fetchCourses').then((connectionsRes) => {
                if (connectionsRes.error) {
                    setErrorMessage(connectionsRes.error);
                    return;
                }
                setConnections(connectionsRes.res);
            })
        } else {
            requestServer('fetchUserCourses', currentUserId).then((connectionsRes) => {

                if (connectionsRes.error) {
                    setErrorMessage(connectionsRes.error);
                    return;
                }
                setConnections(connectionsRes.res);
            })
        }


    }, [currentUserRoleId]);

    return (
        <div>
            <ErrorPageContainer error={errorMessage}>
                <H1>Мои курсы</H1>
                {connections[0] ?
                    (<div className="courses__grid">
                        {connections.map(({ id: course_id }) => {
                            return <CourseCard key={course_id} id={course_id} requestServer={requestServer} checkUserRole={checkUserRole} />
                        }
                        )
                        }

                    </div>)
                    :
                    (<div>
                        <div className='mb-20'>У вас пока нет курсов</div>
                        <Link to="/catalog" className='main-btn'>Смотреть все курсы</Link>
                    </div>)
                }
                {checkUserRole && <Link className='main-btn' to={`/courses/add-new`}>Добавить новый</Link>}

            </ErrorPageContainer>
            <Outlet />

        </div>
    )

}