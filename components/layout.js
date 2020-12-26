import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<header>
				Header
			</header>
			<main>
				{children}
			</main>
			<footer>
				Footer
			</footer>
		</>
	);
}

export default Layout;
