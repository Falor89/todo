import { useEffect } from 'react'
import styles from './popupMini.module.css'

export const PopupMini = ({ state, changeName }) => {


    return (
        <ul className={state ? `${styles.popupVis}` : `${styles.popupHidden}`}>
            <li
                className={styles.popupItems}
                onClick={() => changeName()}
            >
                Изменить название
            </li>
            <li
                className={styles.popupItems}
            >
                Добавить задание
            </li>
        </ul>
    )
}