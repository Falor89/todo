import styles from './hamburgerMenu.module.css'
import vectorIcon from '../../images/vector.png'

export const HamburgerMenu = ({ id, todoId, onChange }) => {

    const onClick = () => {
        console.log('На кнопку меню кликнули!!!' + `${id} and ${todoId}`)
    }
    return (
        <button
            className={styles.hamburgerButton}
            type='button'
            onClick={() => onChange()}
        >
            <img
                className={styles.vectorIcon}
                src={vectorIcon}
                alt="VectorIcon"
            />
        </button>
    )
}