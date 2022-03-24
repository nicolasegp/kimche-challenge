import Card from './Card';

function agrupar(paises = []) {
	const grupos = paises.reduce((grupos, item) => {
		item.languages.map(len => {
			const grupo = grupos[len.name] || [];
			grupo.push(item);
			grupos[len.name] = grupo;
		});
		return grupos;
	}, {});
	return grupos;
}

export default function ByLanguages({ paises }) {
	const grupos = agrupar(paises);
	return (
		<section>
			{Object.entries(grupos).map(lenguaje => {
				return (
					<div key={lenguaje[0]}>
						<div className="h3">{lenguaje[0]}</div>
						<div className="columns p-1">
							{ lenguaje[1].map(pais => <Card key={pais.code} item={pais} />) }
						</div>
						<div className="divider"></div>
					</div>
				)
			})}
		</section>
	)
}
