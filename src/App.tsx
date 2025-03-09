// import styles from '@/App.module.scss';
import { Header } from '@/components/layout/header/Header';
import { Main } from '@/components/layout/main/Main';
import { FC } from 'react';

const App: FC = () => {
	return (
		<>
			<Header />
			<Main />
		</>
	);
};

export default App;
