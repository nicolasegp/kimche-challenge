import { useEffect, useState } from 'react';
import ByContinent from './ByContinent';
import ByLanguages from './ByLanguages';
import Vacio from './Vacio';

export default function Grid({ nombre, filtro, data }) {
	const [paises, setPaises] = useState([]);

	useEffect(() => {
		const res = data.filter((el) => el.name.toLowerCase().includes(nombre.trim().toLowerCase()));
		document.title = res.length > 0 && nombre.trim().length !== 0
			? 'Countries: ' + res.length
			: 'Kimche Challenge';
		setPaises(nombre.trim().length === 0 ? [] : res);
	}, [nombre]);

	return (
		<div>
			{
				paises.length === 0
					? (<Vacio />)
					: (
						filtro === 1
							? <ByContinent paises={paises} />
							: <ByLanguages paises={paises} />
					)
			}
		</div>
	);
}
