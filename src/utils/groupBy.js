const groupByContinent = (country = []) => {
	const groups = country.reduce((groups, item) => {
		const group = groups[item.continent.name] || []
		group.push(item)
		groups[item.continent.name] = group
		return groups
	}, {})
	return Object.entries(groups)
}

const groupByLanguage = (country = []) => {
	const groups = country.reduce((groups, item) => {
		item.languages.map(len => {
			const group = groups[len.name] || []
			group.push(item)
			groups[len.name] = group
		})
		return groups
	}, {})
	return Object.entries(groups)
}

export { groupByContinent, groupByLanguage }
