import React from "react"
import styles from "./Cart.module.css"
import CartItem from "./CartItem.jsx"
import Modal from "../UI/Modal"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const totalAmount = cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0)

  const closeModalHandler = () => {
    dispatch(uiActions.closeModal())
  }
  return (
    <Modal>
      <ul className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </ul>
      <div className={styles.actions}>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <button className={styles["button--alt"]} onClick={closeModalHandler}>
          Close
        </button>

        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
