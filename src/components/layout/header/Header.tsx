import styles from '@/components/layout/header/Header.module.scss';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { FC } from 'react';
import logo from '/Logo.png';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<a href={PUBLIC_PAGES.HOME}>
				<img src={logo} alt="Logo" />
			</a>
		</header>
	);
};
