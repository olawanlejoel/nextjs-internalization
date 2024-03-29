'use client';
// import Link from 'next/link';
import { Link } from '@/navigation';
// import { usePathname } from 'next/navigation';
import { usePathname } from '@/navigation';

const NavLinks = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'About', path: '/about' },
	{ id: 3, name: 'Blog', path: '/blog' },
];

const Navbar = () => {
	const pathname = usePathname();
	const isActive = (path) => path === pathname;

	return (
		<nav className="w-full flex justify-between items-center h-32">
			<div className="logo">
				<Link href="/">
					<p className="text-2xl font-bold">
						Next<span className="text-blue-500">Intl</span>
					</p>
				</Link>
			</div>
			<ul className="flex space-x-10">
				{NavLinks.map((link) => {
					return (
						<li key={link.id}>
							<Link
								href={link.path}
								className={
									isActive(link.path)
										? 'underline decoration-blue-500 decoration-4'
										: ''
								}
							>
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="flex space-x-10">
				<Link href={pathname} locale="en">
					🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
				</Link>
				<Link href={pathname} locale="fr">
					🇫🇷 Français
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
