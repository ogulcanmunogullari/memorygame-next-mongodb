import { configureStore } from "@reduxjs/toolkit"
import cardsReducer from "./cardsSlicer"

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
})
