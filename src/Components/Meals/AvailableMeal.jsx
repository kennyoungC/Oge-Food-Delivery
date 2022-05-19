import React from "react"
import Cart from "../Cart/Cart"
import Card from "../UI/Card"
import styles from "./MealItem/AvailableMeal.module.css"

import MealItem from "./MealItem/MealItem"

const AvailableMeal = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          <MealItem />
        </ul>
        <Cart />
      </Card>
    </section>
  )
}

export default AvailableMeal
