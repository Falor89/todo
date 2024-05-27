import styles from './addButton.module.css';

import addIcon from '../../images/add.svg'

export const AddButton = ({ click, todoId }) => {
    return (
        <button
            onClick={() => click(todoId)}
            className={styles.btnAdd}
            type='button'
        >
            <img
                className={styles.addIcon}
                src={addIcon}
                alt='Кнопка добавления' />
        </button>
    )
}