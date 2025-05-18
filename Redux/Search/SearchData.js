import { createSlice } from '@reduxjs/toolkit'

export const SearchData = createSlice({
  name: 'search',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setSearchQuery } = SearchData.actions

export const searchReducer = SearchData.reducer