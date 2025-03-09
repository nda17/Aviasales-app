import logo from '@/assets/logo.png';
import styles from '@/components/layout/header/Header.module.scss';
import { FC } from 'react';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo" />
		</header>
	);
};
