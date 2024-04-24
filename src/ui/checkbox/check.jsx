import { RiCheckboxBlankCircleLine as CheckTrue } from "react-icons/ri";
import { RiCheckboxCircleLine as CheckFalse } from "react-icons/ri";

const Check = ({ isComplited, click, todo }) => {
    return (
        isComplited ?
            <CheckFalse onClick={() => click(todo._id)} size={24} />
            :
            <CheckTrue onClick={() => click(todo._id)} size={24} />


    )
}

export default Check;