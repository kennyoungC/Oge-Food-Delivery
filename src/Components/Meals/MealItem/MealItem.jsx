import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
const MealItem = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>pizza</h3>
        <div className={styles.description}>sweet and Delicious</div>
        <div className={styles.price}>19.25</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  )
}

export default MealItem
