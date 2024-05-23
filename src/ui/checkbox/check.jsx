import { RiCheckboxBlankCircleLine as CheckTrue } from "react-icons/ri";
import { RiCheckboxCircleLine as CheckFalse } from "react-icons/ri";

const Check = ({ complited, click, todo }) => {
    return (
        complited ?
            <CheckFalse onClick={() => click(todo.id)} size={24} />
            :
            <CheckTrue onClick={() => click(todo.id)} size={24} />


    )
}

export default Check;