import { createSlice } from "@reduxjs/toolkit"
const initialCartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
}
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      state.totalQuantity++
      // state.totalAmount = action.items.price
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price * newItem.quantity,
          quantity: newItem.quantity,
          id: newItem.id,
        })
      } else {
        existingItem.quantity += newItem.quantity
        existingItem.totalPrice =
          newItem.quantity * newItem.price + existingItem.totalPrice
      }
    },
    increaseCartItem(state, action) {
      const newItem = action.payload
      // state.totalQuantity++
      const existingItem = state.items.find((item) => item.id === newItem.id)
      existingItem.quantity++
      existingItem.totalPrice = newItem.price + existingItem.totalPrice
    },
    removeFromCart(state, action) {
      state.totalQuantity--
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
    resetCart(state) {
      state.items = []
    },
  },
})
export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
