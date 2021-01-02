import Head from "next/head";

import Navbar from './navigation/navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
				<Navbar />
			</header>
			<main className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
				{children}
			</main>
			<footer className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8 text-center">
				Copyleft 2020 | Crat.io
			</footer>
		</>
	);
}

export default Layout;
