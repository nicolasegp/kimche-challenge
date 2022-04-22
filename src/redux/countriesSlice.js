import { createSlice } from '@reduxjs/toolkit'

export const countriesSlice = createSlice({
	name: 'countries',
	initialState: {
		loading: false,
		list: []
	},
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload
		},
		setApi: (state, action) => {
			state.list = action.payload
		}
	}
})

export const { setLoading, setApi } = countriesSlice.actions
export default countriesSlice.reducer

export const fetchApi = () => async (dispatch) => {
	dispatch( setLoading(true) )
	const res = await fetch('https://countries.trevorblades.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `
				query getCountries {
					countries {
						name
						code
						emoji
						capital
						currency
						continent {
							name
						}
						languages {
							name
						}
					}
				}
			`,
		}),
	})
	if( ! res.ok) {
		const msg = `Error: ${res.status}`
		throw new Error(msg)
	}
	const countries = await res.json()
	dispatch( setLoading(false) )
	dispatch( setApi(countries.data.countries) )
}
