import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
  name: "modal",
  initialState: { isModalShowing: false, meals: [] },
  reducers: {
    showModal(state) {
      state.isModalShowing = true
    },
    closeModal(state) {
      state.isModalShowing = false
    },
    setMeals(state, action) {
      state.meals = action.payload
    },
  },
})
export const uiReducers = uiSlice.reducer
export const uiActions = uiSlice.actions
