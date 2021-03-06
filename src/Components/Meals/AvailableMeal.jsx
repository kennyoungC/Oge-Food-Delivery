import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import Card from "../UI/Card"
import styles from "./MealItem/AvailableMeal.module.css"

import MealItem from "./MealItem/MealItem"

const mealList = [
  {
    price: 100,
    description: "A nice meal",
    id: "1",
    name: "Meal 1",
    quantity: 1,
  },
  {
    price: 150,
    description: "A second nice meal",
    id: "2",
    name: "Meal 2",
    quantity: 1,
  },
  {
    price: 120,
    description: "A third nice meal",
    id: "3",
    name: "Meal 3",
    quantity: 1,
  },
]
const AvailableMeal = () => {
  // const [mealList, setMealList] = useState([])
  // const mealList = useSelector((state) => state.ui.meals)
  const dispatch = useDispatch()
  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(
        "https://react-http-376d5-default-rtdb.europe-west1.firebasedatabase.app/meal.json"
      )
      let meals = []
      const mealData = await response.json()
      for (const key in mealData) {
        meals.push({
          id: key,
          name: mealData[key].name,
          description: mealData[key].description,
          price: mealData[key].price,
        })
      }
      dispatch(uiActions.setMeals(meals))
      // setMealList(meals)
    }
    getMeals()
  }, [dispatch])
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealList.map((meal) => (
            <MealItem
              price={meal.price}
              description={meal.description}
              id={meal.id}
              key={meal.id}
              name={meal.name}
              quantity={meal.quantity}
            />
          ))}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeal
