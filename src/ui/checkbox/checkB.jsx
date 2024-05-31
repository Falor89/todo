import styles from './check.module.css';

export const Check = ({ isComplited, click, id, taskId }) => {

    const changeClass = (isComplited) => {
        return isComplited ?
            `${styles.checkboxTrue}`
            :
            `${styles.checkboxFalse}`

    }

    return (
        <>
            <button
                className={changeClass(isComplited)}
                onClick={() => click(id, taskId)}
                type='button' />
        </>
    )
}