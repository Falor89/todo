import styles from './appHeader.module.css';

import logo from '../../images/logo.png'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { useSelector } from 'react-redux';

const AppHeader = () => {
    const { authorization, user } = useSelector(store => store.user)
    const location = useLocation().pathname

    const [activeTab, setActiveTab] = useState({
        home: true,
        myList: false,
        profile: false
    })

    useEffect(() => {
        switch (location) {
            case routes.home: setActiveTab({
                home: true,
                myList: false,
                profile: false
            })
                break;
            case routes.myList: setActiveTab({
                home: false,
                myList: true,
                profile: false
            })
                break;
            case routes.profile: setActiveTab({
                home: false,
                myList: false,
                profile: true
            })
                break
            default: setActiveTab({
                home: false,
                myList: false,
                profile: false
            })
        }
    }, [location])


    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Link
                    to={routes.home}
                    className={styles.link}
                >
                    <img
                        src={logo}
                        alt="Логотип toDo"
                        className={styles.logo}
                    />
                </Link>
                <ul className={styles.navList}>
                    <li
                        className={activeTab.home ? styles.activeTab : styles.listItem}
                    >
                        <Link
                            to={routes.home}
                            className={styles.link}
                        >
                            Все задачи
                        </Link>
                    </li>
                    <li
                        className={activeTab.myList ? styles.activeTab : styles.listItem}
                    >
                        <Link
                            to={routes.myList}
                            className={styles.link}
                        >
                            Мои задачи
                        </Link>
                    </li>
                </ul>
                <Link
                    to={routes.login}
                    className={styles.link}
                >
                    {authorization ? `${user.username}` : `Мой профиль`}
                </Link>
            </nav>
        </header>
    )
}

export default AppHeader;