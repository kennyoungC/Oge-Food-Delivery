import React from "react"
import HeaderCartButton from "./HeaderCartButton"
import mealImg from "../../assets/meals.jpg"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <>
      <header
        className={`${styles.header} d-flex flex-column flex-sm-row justify-content-between align-items-center `}
      >
        <h1>Oge's Food Delivery</h1>

        <HeaderCartButton />
      </header>

      <div className={styles["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
    </>
  )
}

export default Header
