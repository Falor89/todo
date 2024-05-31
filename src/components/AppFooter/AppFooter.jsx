import styles from './appFooter.module.css'
import logo from '../../images/logo_footer.svg'
import { Link } from 'react-router-dom'

export const AppFooter = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <div className={styles.description}>
                    <img
                        className={styles.descLogo}
                        src={logo}
                        alt="Логотип Todo"
                    />
                    <span
                        className={styles.descText}
                    >Данный проект является<br />презентацией коллективной работы<br />дизайнера и разработчика<br />Не является коммерческим проектом</span>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.linksContainer}>
                        <p
                            className={styles.containerTitle}
                        >FRONTEND-РАЗРАБОТЧИК</p>
                        <span
                            className={styles.containerName}
                        >Бобырь Максим</span>
                        <ul className={styles.listNav}>
                            <li className={styles.linkContainer}>
                                <Link
                                    className={styles.link}
                                    to='https://t.me/Falor'
                                    target='_blank'
                                >
                                    <span>Telegram</span>
                                </Link>
                            </li>
                            <li
                                className={styles.linkContainer}
                            >
                                <Link
                                    className={styles.link}
                                    to='https://github.com/Falor89'
                                    target='_blank'
                                >
                                    <span>GitHub</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.linksContainer}>
                        <p
                            className={styles.containerTitle}
                        >UI-дизайн</p>
                        <span
                            className={styles.containerName}
                        >Колодезнев Никита</span>
                        <ul className={styles.listNav} >
                            <li className={styles.linkContainer}>
                                <Link
                                    className={styles.link}
                                    to='https://t.me/PanKoloda'
                                    target='_blank'
                                >
                                    <span>Telegram</span>
                                </Link>
                            </li>
                            <li className={styles.linkContainer}>
                                <Link
                                    className={styles.link}
                                    to='https://www.behance.net/kolod'
                                    target='_blank'

                                >
                                    <span>Behance</span>
                                </Link>
                            </li>
                            <li className={styles.linkContainer}>
                                <Link
                                    className={styles.link}
                                    to='https://dprofile.ru/koloda'
                                    target='_blank'

                                >
                                    <span>Dprofile</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </footer >
    )
}