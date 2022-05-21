import { useEffect, useRef } from "react"
import { useState } from "react"
import styles from "./Checkout.module.css"
import useInput from "../../hooks/use-input"
import { useDispatch } from "react-redux"

const Checkout = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: enterNameInputIsNotValid,
    blurHandle: nameBlurHandle,
    inputChangeHandler: nameInputHandler,
    resetValueInput: resetNameInput,
  } = useInput((value) => value.trim() !== "")
  const {
    value: enteredStreet,
    valueIsValid: enteredStreetIsValid,
    hasError: enterStreetInputIsNotValid,
    blurHandle: streetBlurHandle,
    inputChangeHandler: streetInputHandler,
    resetValueInput: resetStreetInput,
  } = useInput((value) => value.trim() !== "")
  const {
    value: enteredPostalCode,
    valueIsValid: enteredpostalCodeIsValid,
    hasError: enterPostalCodeInputIsNotValid,
    blurHandle: postalCodeBlurHandle,
    inputChangeHandler: postalCodeInputHandler,
    resetValueInput: resetPostalCodeInput,
  } = useInput((value) => value.trim().length === 5)
  const {
    value: enteredCity,
    valueIsValid: enteredCityIsValid,
    hasError: enterCityInputIsNotValid,
    blurHandle: cityBlurHandle,
    inputChangeHandler: cityInputHandler,
    resetValueInput: resetCityInput,
  } = useInput((value) => value.trim() !== "")

  let formIsValid = false
  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredpostalCodeIsValid &&
    enteredCityIsValid
  )
    formIsValid = true

  const confirmHandler = (e) => {
    e.preventDefault()

    if (!formIsValid) return
    const userData = {
      name: enteredName,
      city: enteredCity,
      postalCode: enteredPostalCode,
      street: enteredStreet,
    }

    props.onOrder(userData)

    resetNameInput()
    resetStreetInput()
    resetPostalCodeInput()
    resetCityInput()
  }

  const imputStyling = (boolean) => {
    return !boolean ? styles.control : `${styles.control} ${styles.invalid}`
  }

  const nameInputstyling = imputStyling(enterNameInputIsNotValid)
  const cityInputstyling = imputStyling(enterCityInputIsNotValid)
  const streetInputstyling = imputStyling(enterStreetInputIsNotValid)
  const postalCodeInputstyling = imputStyling(enterPostalCodeInputIsNotValid)
  return (
    <form onSubmit={confirmHandler} className={styles.form}>
      <div className={nameInputstyling}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputHandler}
          onBlur={nameBlurHandle}
        />
        {enterNameInputIsNotValid && <p>Please enter a valid name</p>}
      </div>
      <div className={streetInputstyling}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetInputHandler}
          onBlur={streetBlurHandle}
        />
        {enterStreetInputIsNotValid && <p>Please enter a valid street</p>}
      </div>
      <div className={postalCodeInputstyling}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostalCode}
          onChange={postalCodeInputHandler}
          onBlur={postalCodeBlurHandle}
        />
        {enterPostalCodeInputIsNotValid && (
          <p>Please enter a valid postal code (5-digits)</p>
        )}
      </div>
      <div className={cityInputstyling}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityInputHandler}
          onBlur={cityBlurHandle}
        />
        {enterCityInputIsNotValid && <p>Please enter a valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  )
}
export default Checkout
