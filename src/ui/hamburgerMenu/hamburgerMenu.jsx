import styles from './hamburgerMenu.module.css'
import vectorIcon from '../../images/vector.png'

export const HamburgerMenu = () => {

    const onClick = () => {
        console.log('На кнопку меню кликнули!!!')
    }
    return (
        <button
            className={styles.hamburgerButton}
            type='button'
            onClick={onClick}
        >
            <img
                className={styles.vectorIcon}
                src={vectorIcon}
                alt="VectorIcon"
            />
        </button>
    )
}