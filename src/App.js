import { useState } from 'react';
import Form from './components/Form';
import Grid from './components/Grid';
import { gql, useQuery } from '@apollo/react-hooks';

const GET_COUNTRIES = gql`
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
`;

export default function App() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);
	const [nombre, setNombre] = useState('');
	const [filtro, setFiltro] = useState(1);
	
	if(loading) {
		return (
			<main className="container grid-md my-2">
				<div class="loading loading-lg"></div>
			</main>
		);
	}
	if(error) {
		return (
			<main className="container grid-md my-2">
				<h1>Error 😭</h1>
			</main>
		);
	}
	
	return (
		<main className="container grid-md my-2">
			<h1 className="h1 text-bold">Country Search 🔎</h1>
			<Form setNombre={setNombre} setFiltro={setFiltro} />
			<div className="divider"></div>
			<Grid nombre={nombre} filtro={filtro} data={data ? data.countries : []} />
		</main>
	);
}
