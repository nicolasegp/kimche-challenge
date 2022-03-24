export default function Card({ item }) {
	return (
		<div className="column col-6 col-sm-12 my-2">
			<div className="card">
				<div className="card-header">
					<div className="card-title h5 text-ellipsis" title={item.name}>
						{item.emoji} {item.name}
					</div>
				</div>
				<div className="card-body">
					<ul>
						<li><strong>Capital:</strong> {item.capital || '--'}</li>
						<li><strong>Currency:</strong> {item.currency || '--'}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
