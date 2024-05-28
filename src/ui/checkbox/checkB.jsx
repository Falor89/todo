import styles from './check.module.css';

export const Check = ({ isComplited, click, id, taskId }) => {

    const changeClass = (isComplited) => {
        return isComplited ?
            `${styles.checkboxTrue}`
            :
            `${styles.checkboxFalse}`

    }

    return (
        // isComplited ?
        //     <img src={checkbox_true} alt="Checkbox_True" onClick={() => click(id, taskId)} />
        //     :
        //     <img src={checkbox_false} alt="Checkbox_False" onClick={() => click(id, taskId)} />
        <>
            <button
                className={changeClass(isComplited)}
                onClick={() => click(id, taskId)}
                type='button' />
        </>
    )
}