import styles from './main-page.module.css';
import { Header } from './components/Header/Header';
import { AllCourses } from '../AllCourses/AllCourses';

export const MainPage = () => {
    return (
        <>
            <Header />
            {/* <Banner />
            <Catalog /> */}
            <AllCourses />
        </>
    )

}