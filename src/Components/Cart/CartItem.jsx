import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart-slice"
import styles from "./CartItem.module.css"

const CartItem = (props) => {
  const { name, price, amount, totalPrice, id } = props
  const dispatch = useDispatch()

  const increaceCartItems = () => {
    dispatch(
      cartActions.addToCart({
        name,
        price,

        id,
      })
    )
  }
  const removeCartItems = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2 className="text-capitalize">{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={`${styles.actions} d-flex flex-column  fs-4`}>
        <div>
          <button onClick={removeCartItems}>−</button>
          <button onClick={increaceCartItems}>+</button>
        </div>
        <span className={styles.price}>${totalPrice.toFixed(2)} </span>
      </div>
    </li>
  )
}

export default CartItem
