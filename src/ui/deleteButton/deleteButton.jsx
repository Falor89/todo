import styles from './deleteButton.module.css'
import deleteIcon from '../../images/delete.png'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../services/actions/todos'

export const DeleteButton = ({ id, todoId }) => {

    const dispatch = useDispatch()
    const onDelete = (id, todoId) => {
        dispatch(deleteTodo(id, todoId))
    }

    return (
        <button
            className={styles.deleteBtn}
            onClick={() => onDelete(id, todoId)}
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