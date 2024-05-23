import styles from './appHeader.module.css';

import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <img
                    src={logo}
                    alt="Логотип toDo"
                    className={styles.logo}
                />
                <ul className={styles.navList}>
                    <li
                        className={styles.listItem}
                    >
                        <Link
                            to='/'
                            className={styles.link}
                        >
                            All tasks
                        </Link>
                    </li>
                    <li
                        className={styles.listItem}
                    >
                        <Link
                            to='/'
                            className={styles.link}
                        >
                            My list
                        </Link>
                    </li>
                </ul>
                <Link
                    to='/'
                    className={styles.link}
                >
                    My account
                </Link>
            </nav>
        </header>
    )
}

export default AppHeader;