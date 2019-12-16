import axios from 'axios';

// Components
import Prices from './../components/Prices';

const Home = ({ pageProps }) => {
	const { bpi } = pageProps;
	console.log('bpi', bpi);
	return (
		<>
			<h1>Home</h1>
			<Prices bpi={bpi} />
		</>
	);
};

Home.getInitialProps = async () => {
	const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';
	const response = await axios.get(endpoint);
	const { bpi } = response.data;
	return {
		bpi: response.data.bpi,
	};
};

export default Home;
