import styles from './appHeader.module.css';

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.text}>ToDo.</h2>
        </header>
    )
}

export default AppHeader;