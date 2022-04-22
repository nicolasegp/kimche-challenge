import { configureStore } from '@reduxjs/toolkit'

import countriesSlice from './countriesSlice'
import searchSlice from './searchSlice'

export const store = configureStore({
	reducer: {
		countriesSlice,
		searchSlice
	}
})
