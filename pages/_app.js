import App from 'next/app';
import Layout from './../components/Layout';

class MyApp extends App {
	render() {
		const { pageProps, Component } = this.props;
		return (
			<Layout>
				<Component pageProps={pageProps} />
			</Layout>
		);
	}
}

export default MyApp;
