import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		country: '',
		filter: 1
	},
	reducers: {
		setValue: (state, action) => {
			state.country = action.payload
		},
		setFilterValue: (state, action) => {
			state.filter = action.payload
		},
	}
})

export const { setValue, setFilterValue } = searchSlice.actions
export default searchSlice.reducer

export const search = (val) => async (dispatch) => {
	dispatch( setValue( val.trim().toLowerCase() ) )
}

export const setFilter = (op) => async (dispatch) => {
	dispatch( setFilterValue(op) )
}
