import React from "react"
import HeaderCartButton from "./HeaderCartButton"
import mealImg from "../../assets/meals.jpg"
import styles from "./Header.module.css"
import Cart from "../Cart/Cart"
import { useSelector } from "react-redux"

const Header = () => {
  const isShowing = useSelector((state) => state.ui.isModalShowing)

  return (
    <>
      <header
        className={`${styles.header} d-flex flex-column flex-sm-row justify-content-between align-items-center `}
      >
        <h1>Precious's Delivery</h1>

        <HeaderCartButton />
        {isShowing && <Cart />}
      </header>

      <div className={styles["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
    </>
  )
}

export default Header
