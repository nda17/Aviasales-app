import styles from '@/components/ui/transfers-filter/TransfersFilter.module.scss';
import { changeTransfersFilter } from '@/store/slices/transfersFilterSlice';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TransfersFilter: FC = () => {
	const transfersFilter = useSelector(
		(state: { transfersFilter: { activeFilters: string } }) =>
			state.transfersFilter.activeFilters
	);

	const dispatch = useDispatch();
	const toggleTransfers = (value: string) =>
		dispatch(changeTransfersFilter({ value }));

	return (
		<form className={styles['form-wrapper']}>
			<h2 className={styles.title}>Количество пересадок</h2>

			<div className={styles['checkbox-wrapper']}>
				<input
					className={styles.checkbox}
					type="checkbox"
					id="all"
					checked={transfersFilter.includes('all')}
					onChange={() => toggleTransfers('all')}
				/>
				<span className={styles['checkbox-label']}>Все</span>
			</div>

			<div className={styles['checkbox-wrapper']}>
				<input
					className={styles.checkbox}
					type="checkbox"
					id="noTransfers"
					checked={
						transfersFilter.includes('all') ||
						transfersFilter.includes('no-transfers')
					}
					onChange={() => toggleTransfers('no-transfers')}
				/>
				<span className={styles['checkbox-label']}>Без пересадок</span>
			</div>

			<div className={styles['checkbox-wrapper']}>
				<input
					className={styles.checkbox}
					type="checkbox"
					id="oneTransfer"
					checked={
						transfersFilter.includes('all') ||
						transfersFilter.includes('one-transfers')
					}
					onChange={() => toggleTransfers('one-transfers')}
				/>
				<span className={styles['checkbox-label']}>1 пересадка</span>
			</div>

			<div className={styles['checkbox-wrapper']}>
				<input
					className={styles.checkbox}
					type="checkbox"
					id="twoTransfers"
					checked={
						transfersFilter.includes('all') ||
						transfersFilter.includes('two-transfers')
					}
					onChange={() => toggleTransfers('two-transfers')}
				/>
				<span className={styles['checkbox-label']}>2 пересадки</span>
			</div>

			<div className={styles['checkbox-wrapper']}>
				<input
					className={styles.checkbox}
					type="checkbox"
					id="threeTransfers"
					checked={
						transfersFilter.includes('all') ||
						transfersFilter.includes('three-transfers')
					}
					onChange={() => toggleTransfers('three-transfers')}
				/>
				<span className={styles['checkbox-label']}>3 пересадки</span>
			</div>
		</form>
	);
};
