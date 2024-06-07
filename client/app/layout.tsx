import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import SideNav from './(components)/SideNav';

const archivo = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Periodic Tables Reservation System',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={archivo.className}>
				<SideNav />
				{children}
			</body>
		</html>
	);
}
