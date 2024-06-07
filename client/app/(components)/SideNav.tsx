import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/pt-plat-logo.png';

export default function SideNav() {
	return (
		<nav className='fixed w-64 h-full bg-gray-800 py-10'>
			<div className='flex items-center justify-center h-16 mb-10'>
				<Image src={logo} alt='Logo' width={120} height={120} />
			</div>
			<ul className='flex flex-col p-4 space-y-4 text-white'>
				<li>
					<Link href='/'>New Reservation</Link>
				</li>
			</ul>
		</nav>
	);
}
