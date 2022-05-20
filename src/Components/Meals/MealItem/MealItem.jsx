import { useDispatch } from "react-redux"
import { cartActions } from "../../../store/cart-slice"
import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
const MealItem = (props) => {
  const { price, name, id, description, quantity } = props
  const dispatch = useDispatch()
  const addToCartHandler = (amount) => {
    console.log(amount)
    dispatch(
      cartActions.addToCart({
        name,
        price,
        quantity: amount,
        id,
      })
    )
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>
          {name}
          {quantity}
        </h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
