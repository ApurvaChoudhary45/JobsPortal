import { createSlice } from '@reduxjs/toolkit'

export const Fetchdata = createSlice({
  name: 'fetch',
  initialState: {
    cards : [],
  },
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setCards} = Fetchdata.actions

export const fetchReducer =  Fetchdata.reducer