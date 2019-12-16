const SelectCurrency = ({ currency, handleCurrencyChange }) => {
	return (
		<select className="form-control" onChange={handleCurrencyChange}>
			<option value="USD">USD</option>
			<option value="EUR">EUR</option>
			<option value="GBP">GBP</option>
		</select>
	);
};

export default SelectCurrency;
