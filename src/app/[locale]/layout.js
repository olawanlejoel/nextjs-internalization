import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, params: { locale } }) {
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<div className="max-w-6xl mx-auto">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
