import styles from "./CartItem.module.css"

const CartItem = (props) => {
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>pizza</h2>
        <div className={styles.summary}>
          <span className={styles.price}>$19.25</span>
          <span className={styles.amount}>x 3</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  )
}

export default CartItem
