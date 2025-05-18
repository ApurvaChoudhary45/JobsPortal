import { configureStore } from '@reduxjs/toolkit'
import { fetchReducer } from './Fetch/Fetchdata'
import { searchReducer } from './Search/SearchData'
import { bookReducer } from './Saved/Bookmak'
export const store =  configureStore({
  reducer: {
    fetch: fetchReducer,
    search: searchReducer,
    bookmark : bookReducer
  }
})