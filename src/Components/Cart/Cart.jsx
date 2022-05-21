import React, { useState } from "react"
import styles from "./Cart.module.css"
import CartItem from "./CartItem.jsx"
import Modal from "../UI/Modal"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import Checkout from "./Checkout"
import { cartActions } from "../../store/cart-slice"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const hasItems = cartItems.length > 0
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const dispatch = useDispatch()
  const totalAmount = cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0)

  const closeModalHandler = () => {
    dispatch(uiActions.closeModal())
  }
  const cartItemContent = (
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
  )
  const orderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch(
      "https://react-http-376d5-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartItems,
        }),
      }
    )
    setShowForm(false)
    setIsSubmitting(false)
    setDidSubmit(true)
    dispatch(cartActions.resetCart())
  }
  const actionBtn = (
    <>
      <button className={styles["button--alt"]} onClick={closeModalHandler}>
        Close
      </button>

      {hasItems && (
        <button className={styles.button} onClick={() => setShowForm(true)}>
          Order
        </button>
      )}
    </>
  )
  const isSubmittingContent = (
    <div className="d-flex justify-content-center">
      <div className={styles.spinner}>
        <div className={`${styles.loader} ${styles.l1} `}></div>
        <div className={`${styles.loader} ${styles.l2}`}></div>
      </div>
    </div>
  )
  const modalContent = (
    <>
      {cartItemContent}
      <div className={styles.actions}>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        {!showForm && actionBtn}
      </div>
      {showForm && (
        <Checkout onClose={closeModalHandler} onOrder={orderHandler} />
      )}
    </>
  )
  const didSubmitContent = (
    <>
      <p className="text-success">Your order has Successfully been placed!!!</p>
      <div className={styles.actions}>
        <button
          className={`${styles["button--alt"]} border border-success text-success`}
          onClick={closeModalHandler}
        >
          Close
        </button>
      </div>
    </>
  )
  return (
    <Modal>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && isSubmittingContent}
      {didSubmit && didSubmitContent}
    </Modal>
  )
}

export default Cart
