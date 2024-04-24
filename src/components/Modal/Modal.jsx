import { IoCloseSharp as CloseIcon } from "react-icons/io5";
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './modal.module.css';
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalContainer = document.querySelector('#modal')

const Modal = ({ onClose, children, title }) => {
    const handleEscKeydown = (e) => {
        e.key === 'Escape' && onClose()
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscKeydown)
        return () => {
            document.removeEventListener('keydown', handleEscKeydown)
        }
    })

    return createPortal(
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <button
                    type="button"
                    className={styles.btnClose}
                >
                    <CloseIcon color="white" size={30} onClick={() => onClose()} />
                </button>
                {children}
            </div>
            <ModalOverlay onClick={onClose} />
        </>,
        modalContainer
    )
}

export default Modal;