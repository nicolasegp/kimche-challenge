import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from './redux/countriesSlice'

import Form from './components/Form'
import Grid from './components/Grid'

const App = () => {
	const dispatch = useDispatch()
	const { loading } = useSelector(state => state.countriesSlice)

	useEffect(() => {
		dispatch( fetchApi() )
	}, [])

	if(loading) {
		return (
			<main className="container grid-md my-2">
				<div className="loading loading-lg"></div>
			</main>
		);
	}

	return (
		<main className="container grid-md my-2">
			<h1 className="h1 text-bold">Country Search 🔎</h1>
			<Form />
			<div className="divider"></div>
			<Grid />
		</main>
	)
}

export default App
