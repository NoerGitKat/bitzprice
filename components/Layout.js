import Header from './Head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Navbar />
			<div className="container">{children}</div>
		</>
	);
};

export default Layout;
