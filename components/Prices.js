import { useState, useEffect } from 'react';

import SelectCurrency from './SelectCurrency';

const Prices = ({ bpi }) => {
	const [currency, setCurrency] = useState('USD');

	const handleCurrencyChange = val => {
		const { value } = val.target;

		setCurrency(() => {
			return value;
		});
	};

	return (
		<>
			<ul className="list-group">
				<li className="list-group-item">
					Bitcoin rate for {bpi[currency].description}:{' '}
					<span className="badge badge-primary">{bpi[currency].code}</span>{' '}
					<strong>{bpi[currency].rate}</strong>
				</li>
			</ul>
			<br />
			<SelectCurrency currency={currency} handleCurrencyChange={handleCurrencyChange} />
		</>
	);
};

export default Prices;
