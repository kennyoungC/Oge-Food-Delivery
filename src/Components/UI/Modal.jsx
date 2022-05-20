import React from "react"
import styles from "./Modal.module.css"
import reactDom from "react-dom"
import { useDispatch } from "react-redux"
import { uiActions } from "../../store/ui-slice"
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />
}
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const Modal = (props) => {
  const dispatch = useDispatch()

  const closeModalHandler = () => {
    dispatch(uiActions.closeModal())
  }
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onClose={closeModalHandler} />,
        document.getElementById("overlays")
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  )
}

export default Modal
