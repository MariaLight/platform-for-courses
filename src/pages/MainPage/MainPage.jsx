import styles from './main-page.module.css';
import { Header, Banner } from './components';
import { AllCourses } from '../AllCourses/AllCourses';
import { FeedbackForm, H1 } from '../../components';

export const MainPage = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className='container'>
                <div id="catalog" className={styles.catalog__block}>
                    <AllCourses />
                </div>
                <div id="feedback" className={styles.feedback__block}>
                    <H1>Задать вопрос</H1>
                    <p className={styles.feedback__text}>Напишите нам — менеджер ответит на почту</p>
                    <FeedbackForm />
                </div>
            </div>
        </>
    )

}