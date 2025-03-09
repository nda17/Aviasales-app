import styles from '@/components/ui/additional-filter/AdditionalFilter.module.scss';
import { changeAdditionalFilter } from '@/store/slices/additionalFilterSlice';
import clsx from 'clsx';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const AdditionalFilter: FC = () => {
	const additionalFilter = useSelector(
		(state: { additionalFilter: { activeFilter: string } }) =>
			state.additionalFilter.activeFilter
	);

	const dispatch = useDispatch();
	const toggleAdditional = (value: string) =>
		dispatch(changeAdditionalFilter({ value }));

	return (
		<section className={styles.wrapper}>
			<button
				className={clsx(styles['button-cheap'], {
					[styles.active]: additionalFilter === 'cheap'
				})}
				type="button"
				onClick={() => toggleAdditional('cheap')}
			>
				Самый дешевый
			</button>
			<button
				className={clsx(styles['button-fast'], {
					[styles.active]: additionalFilter === 'fast'
				})}
				type="button"
				onClick={() => toggleAdditional('fast')}
			>
				Самый быстрый
			</button>
			<button
				className={clsx(styles['button-optimal'], {
					[styles.active]: additionalFilter === 'optimal'
				})}
				type="button"
				onClick={() => toggleAdditional('optimal')}
			>
				Оптимальный
			</button>
		</section>
	);
};
