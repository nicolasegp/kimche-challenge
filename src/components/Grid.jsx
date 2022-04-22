import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Empty from './Empty'
import Card from './Card'
import { groupByContinent, groupByLanguage } from '../utils/groupBy'

const Grid = () => {
	const [data, setData] = useState([])
	const { list } = useSelector(state => state.countriesSlice)
	const { country, filter } = useSelector(state => state.searchSlice)

	useEffect(() => {
		const res = list.filter(el => el.name.toLowerCase().includes( country ))
		document.title = res.length > 0 && country.length !== 0
			? 'Countries: ' + res.length
			: 'Kimche Challenge';
		setData(filter === 1 ? groupByContinent(res) : groupByLanguage(res))
	}, [country, filter])

	if(country.length === 0 || data.length === 0) {
		return <Empty />
	}

	return (
		<section>
			{ data.map(groups => {
				return (
					<div key={ groups[0] }>
						<div className="h3">{ groups[0] }</div>
						<div className="columns p-1">
							{ groups[1].map(item => <Card key={item.code} item={item} />) }
						</div>
						<div className="divider"></div>
					</div>
				)
			}) }
		</section>
	)
}

export default Grid
