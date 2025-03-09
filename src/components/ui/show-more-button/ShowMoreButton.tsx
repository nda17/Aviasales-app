import styles from '@/components/ui/show-more-button/ShowMoreButton.module.scss';
import { setQuantityTickets } from '@/store/slices/showMoreTicketsSlice';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

export const ShowMoreButton: FC = () => {
	const dispatch = useDispatch();

	const showMoreTickets = (value: number) =>
		dispatch(setQuantityTickets(value));

	return (
		<button
			onClick={() => showMoreTickets(5)}
			className={styles.button}
			type="button"
		>
			Показать еще 5 билетов!
		</button>
	);
};
