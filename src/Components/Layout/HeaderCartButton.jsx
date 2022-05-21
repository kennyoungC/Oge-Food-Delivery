import React, { useEffect, useState } from "react"

import { Badge, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import styles from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
  const [btnIsHighligted, setBtnIsHighligted] = useState(false)
  const items = useSelector((state) => state.cart.items)
  const totalItems = items.reduce((acc, cur) => acc + cur.quantity, 0)
  const dispatch = useDispatch()

  const toggleModalHandler = () => {
    dispatch(uiActions.showModal())
  }

  const btnBumpStyling = btnIsHighligted ? styles.bump : ""

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighligted(true)

    const timer = setTimeout(() => {
      setBtnIsHighligted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <Button
      onClick={toggleModalHandler}
      variant="transparent"
      className={`${btnBumpStyling} px-4 border border-warning rounded-pill d-flex gap-2 align-items-center`}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          className="bi bi-cart3"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </span>
      <span className="fw-bolder text-light">Your Cart</span>{" "}
      <Badge bg="danger">{totalItems}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  )
}

export default HeaderCartButton
