import styles from './main-page.module.css';
import { Header, Banner } from './components';
import { AllCourses } from '../AllCourses/AllCourses';

export const MainPage = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className='container'>
                <div id="catalog" className={styles.catalog__block}>
                    <AllCourses />
                </div>

            </div>
        </>
    )

}