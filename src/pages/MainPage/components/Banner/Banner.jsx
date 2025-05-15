import styles from './banner.module.css';
import { HashLink} from 'react-router-hash-link';

export const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className="container">
                    <div className={styles.banner__content}>
                        <h1 className={styles.banner__title}>Институт дополнительного образования: знания, которые работают</h1>
                        <div className={styles.banner__description}>Институт дополнительного образования предоставляет Вам возможность в короткие сроки пройти обучение по программам дополнительного образования, которые помогут стать успешнее в работе и жизни.</div>
                        <HashLink to='#catalog' className={`${styles.banner__btn} main-btn`} >Смотреть каталог курсов</HashLink>
                    </div>
                </div>
            </div>
        </>
    )
}