import { useDispatch } from 'react-redux'
import checkbox_false from '../../images/checkbox_False.png'
import checkbox_true from '../../images/checkbox_True.png'
//import { updateTodo } from '../../services/actions/todos'

export const Check = ({ isComplited, click, id, taskId }) => {

    return (
        isComplited ?
            <img src={checkbox_true} alt="Checkbox_True" onClick={() => click(id, taskId)} />
            :
            <img src={checkbox_false} alt="Checkbox_False" onClick={() => click(id, taskId)} />
    )
}