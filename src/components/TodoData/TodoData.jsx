import styles from './todoData.module.css'

import { TaskInput } from '../../ui/TaskInput/TaskInput'
import { TodoItem } from '../TodoItem/TodoItem'
import { toggleTodo } from '../../services/actions/todos'
import { useDispatch } from 'react-redux'

export const TodoData = ({ todos, inputType }) => {
    const dispatch = useDispatch()

    const onChange = (id) => {
        dispatch(toggleTodo(id))
    }
    return (
        <div className={styles.todoContainer}>
            <TaskInput value='Все задачи' type={inputType} />
            <ul className={styles.todoList}>
                {
                    todos.map((todo) => (
                        <TodoItem
                            todo={todo}
                            onChange={onChange}
                            key={todo._id}
                        />
                    )
                    )
                }
            </ul>
        </div>
    )
}