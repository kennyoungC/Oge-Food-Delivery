import { configureStore } from "@reduxjs/toolkit"
import { uiReducers } from "./ui-slice"
import { cartReducer } from "./cart-slice"
const store = configureStore({
  reducer: {
    ui: uiReducers,
    cart: cartReducer,
  },
})
export default store
