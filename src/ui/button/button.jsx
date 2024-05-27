import styles from './button.module.css'

export const FormButton = ({ htmlType, title }) => {
    return (
        <>
            <button

                type={htmlType}
                className={styles.btn}
            >
                {title}
            </button>
        </>
    )
}