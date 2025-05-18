import { createSlice } from '@reduxjs/toolkit'

export const Bookmak = createSlice({
  name: 'bookmark',
  initialState: {
    bookmarks: [],
  },
  reducers: {
    
    marked: (state, action) => {
        const id = action.payload
        if(state.bookmarks.includes(id)){
            state.bookmarks = state.bookmarks.filter((item) => item !== id)
    }
    else{
        state.bookmarks.push(id)
    }
  }
},
})

// Action creators are generated for each case reducer function
export const { marked } = Bookmak.actions

export const bookReducer =  Bookmak.reducer