import { useDispatch, useSelector } from 'react-redux'
import { search, setFilter } from '../redux/searchSlice'

const Form = () => {
	const dispatch = useDispatch()
	const { country, filter } = useSelector(state => state.searchSlice)

	return (
		<div className="card">
			<form className="card-body" onSubmit={ (e) => e.preventDefault() }>
				<div className="has-icon-left">
					<input
						type="text"
						name="pais"
						className="form-input"
						placeholder="Enter a country name"
						value={country}
						onChange={ (e) => dispatch( search(e.target.value) ) }
					/>
					<i className="form-icon icon icon-search" />
				</div>
			</form>
			<div className="card-body">
				<div className="columns p-1">
					<div className="column col-6 hide-sm h5">Group by</div>
					<div className="column col-3 col-sm-6">
						<button className={`btn btn-block mx-1 ${filter === 1 ? 'btn-primary' : ''}`} onClick={ () => dispatch( setFilter(1) ) }>
							<i className="icon icon-location" /> Continent
						</button>
					</div>
					<div className="column col-3 col-sm-6">
						<button className={`btn btn-block mx-1 ${filter === 2 ? 'btn-primary' : ''}`} onClick={ () => dispatch( setFilter(2) ) }>
							<i className="icon icon-person" /> Languages
						</button>
					</div>
				</div>
			</div>
			<div className="card-footer text-right">
				<small>
					<a href="https://github.com/nicolasegp/kimche-challenge">View in Github</a>
				</small>
			</div>
		</div>
	)
}

export default Form
