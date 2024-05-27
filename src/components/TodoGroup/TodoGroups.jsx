import styles from './todoGroups.module.css'

import { useDispatch, useSelector } from "react-redux"
import { addNewGroup, addNewGroupTask, toggleGroupTask } from "../../services/actions/todos"
import { Check } from '../../ui/checkbox/checkB'
import { TaskInput } from '../../ui/TaskInput/TaskInput'
import { TodoItem } from '../TodoItem/TodoItem'
import { HamburgerMenu } from '../../ui/hamburgerMenu/hamburgerMenu'
import { AddButton } from '../../ui/addButton/addButton'

export const TodoGroup = () => {
    const dispatch = useDispatch()
    const { groupTodos } = useSelector(store => store.todos)
    const addGroup = (group) => {
        dispatch(addNewGroup(group))
    }

    const onChange = (id, taskId) => {
        dispatch(toggleGroupTask(id, taskId))
    }

    const addTask = (id) => [
        dispatch(addNewGroupTask(id))
    ]


    return (
        <div className={styles.groupConstructor}>
            <div className={styles.groupContainer}>
                {
                    groupTodos.map((todo) => (
                        <div
                            className={styles.groupTodo}
                            key={todo._id}
                        >
                            <div className={styles.groupTitle}>
                                <TaskInput value={todo.title} type='' />
                                <HamburgerMenu />
                                <AddButton
                                    click={addTask}
                                    todoId={todo._id}
                                />
                            </div>
                            <ul className={styles.listItems}>
                                {
                                    todo.tasks.map((item) => (
                                        <TodoItem
                                            todo={item}
                                            onChange={onChange}
                                            todoId={todo._id}
                                        />
                                        // <>
                                        //     <li
                                        //         key={item._id}
                                        //     >{item.text}</li>
                                        //     <Check
                                        //         isComplited={item.isCompleted}
                                        //         click={onChange}
                                        //         id={todo._id}
                                        //         taskId={item._id}
                                        //     />
                                        // </>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <button
                className={styles.btnAddGroup}
                onClick={() => addGroup()}
            >
                Создать группу +
            </button>
        </div>
    )
}