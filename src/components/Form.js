import { useEffect, useState } from 'react';

export default function Form({ setNombre, setFiltro }) {
	const [pais, setPais] = useState('');
	const [opcion, setOpcion] = useState(1);

	useEffect(() => {
		setNombre(pais);
	}, [pais]);

	useEffect(() => {
		setFiltro(opcion);
	}, [opcion]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="card">
			<form className="card-body" onSubmit={handleSubmit}>
				<div className="has-icon-left">
					<input
						type="text"
						name="pais"
						className="form-input"
						placeholder="Enter a country name"
						value={pais}
						onChange={(e) => setPais(e.target.value)}
					/>
					<i className="form-icon icon icon-search"></i>
				</div>
			</form>
			<div className="card-body">
				<div className="columns p-1">
					<div className="column col-6 hide-sm h5">Group by</div>
					<div className="column col-3 col-sm-6">
						<button className={`btn btn-block mx-1 ${opcion === 1 ? 'btn-primary' : ''}`} onClick={() => setOpcion(1)}>
							<i class="icon icon-location"></i> Continent
						</button>
					</div>
					<div className="column col-3 col-sm-6">
						<button className={`btn btn-block mx-1 ${opcion === 2 ? 'btn-primary' : ''}`} onClick={() => setOpcion(2)}>
							<i class="icon icon-person"></i> Languages
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
