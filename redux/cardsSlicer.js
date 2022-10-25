import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"

const cardsAdapter = createEntityAdapter({
  selectId: (cards) => cards.id,
})

export const cardsSelector = cardsAdapter.getSelectors((state) => state.cards)

const cardsSlice = createSlice({
  name: "cards",
  initialState: cardsAdapter.getInitialState(),
  reducers: {
    updateCard: cardsAdapter.updateOne,
    updateManyCard: cardsAdapter.updateMany,
    setAllCards: cardsAdapter.setAll,
  },
})

export const { updateCard, setAllCards, updateManyCard } = cardsSlice.actions
export default cardsSlice.reducer
