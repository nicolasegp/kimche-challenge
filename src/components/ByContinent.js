import Card from './Card';

function agrupar(paises = []) {
	const grupos = paises.reduce((grupos, item) => {
		const grupo = grupos[item.continent.name] || [];
		grupo.push(item);
		grupos[item.continent.name] = grupo;
		return grupos;
	}, {});
	return grupos;
}

export default function ByContinent({ paises }) {
	const grupos = agrupar(paises);
	return (
		<section>
			{Object.entries(grupos).map(zona => {
				return (
					<div key={zona[0]}>
						<div className="h3">{zona[0]}</div>
						<div className="columns p-1">
							{ zona[1].map(pais => <Card key={pais.code} item={pais} />) }
						</div>
						<div className="divider"></div>
					</div>
				)
			})}
		</section>
	)
}
