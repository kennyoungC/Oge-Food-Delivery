import { useState } from "react"

const useInput = (validateValue) => {
  const [value, setValue] = useState("")
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(value)
  // console.log(valueIsValid)
  const hasError = !valueIsValid && isTouched

  const inputChangeHandler = (e) => {
    setValue(e.target.value)
  }
  const blurHandle = () => {
    setIsTouched(true)
  }

  const resetValueInput = () => {
    setValue("")
    setIsTouched(false)
  }

  return {
    value,
    hasError,
    valueIsValid,
    blurHandle,
    inputChangeHandler,
    resetValueInput,
  }
}

export default useInput
