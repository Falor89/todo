import styles from './deleteButton.module.css'
import deleteIcon from '../../images/delete.png'
import { useDispatch } from 'react-redux'
//import { deleteTodo } from '../../services/actions/todos'

export const DeleteButton = ({ todoId }) => {

    return (
        <button
            className={styles.deleteBtn}
            type='button'
        >
            <img
                className={styles.deleteIcon}
                src={deleteIcon}
                alt="TrashIcon"
            />
        </button>
    )
}