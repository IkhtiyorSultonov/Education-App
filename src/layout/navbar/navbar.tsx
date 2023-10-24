import {useState} from 'react'
import {motion} from "framer-motion"
import styles from "./navbar.module.css"
import Link from 'next/link';
import { LogoIco } from '..';
import { navLinks } from '@/helpers/constants';
import { Search, Text } from '@/components';
import IcoButton from '@/components/icon-button/ico-button';
const navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffnes: 20,
			},
		},
		closed: {
			opacity: 0,
			x: '100%',
		},
	};

	const toggleOpen = () => setIsOpen(prev => !prev);

	return (
		<div className={styles.navbar}>
			<nav className={styles.nav}>
				<Link href={'/'}>
					<LogoIco className={styles.logo} />
				</Link>
				<div className={styles.navigation}>
					{navLinks.map((nav, idx) => (
						<Link href={nav.route} key={idx}>
							<Text className={styles.NavLink}>{nav.name}</Text>
						</Link>
					))}
					<Search />
				</div>
				<IcoButton onClick={toggleOpen} icon={isOpen ? 'Close' : 'Menu'} appearance='white' className={styles.mobileIcon} />
				<motion.div variants={variants} initial={'closed'} animate={isOpen ? 'opened' : 'closed'} className={styles.mobileMenu}>
					{navLinks.map((nav, idx) => (
						<Link href={nav.route} key={idx} className={styles.navLink}>
							<Text  style={{'color':"#fff"}}>{nav.name}</Text>
						</Link>
					))}
					<Search className={styles.search} />
				</motion.div>
			</nav>
		</div>
	);
};


export default navbar