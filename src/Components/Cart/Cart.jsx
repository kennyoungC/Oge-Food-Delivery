import React from "react"
import styles from "./Cart.module.css"
import CartItem from "./CartItem.jsx"
import Modal from "../UI/Modal"

const Cart = () => {
  return (
    <Modal>
      <ul className={styles["cart-items"]}>
        <CartItem />
      </ul>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>

        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
