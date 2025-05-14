import { Outlet } from 'react-router-dom';
import styles from '../../app.module.css';
import { Sidebar } from '../Sidebar/Sidebar';

export const ContainerWithSidebar = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main className={styles.main}>
                {children}
                <Outlet />
            </main>

        </>
    )
} 