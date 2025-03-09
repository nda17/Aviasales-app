import styles from '@/components/layout/main/Main.module.scss';
import { AdditionalFilter } from '@/components/ui/additional-filter/AdditionalFilter';
import { ShowMoreButton } from '@/components/ui/show-more-button/ShowMoreButton';
import { ITicketItem } from '@/components/ui/ticket-item/ticket-item.interface';
import { TicketList } from '@/components/ui/ticket-list/TicketList';
import { TransfersFilter } from '@/components/ui/transfers-filter/TransfersFilter';
import { useGetSearchIdQuery, useGetTicketsQuery } from '@/store/api';
import { setProgressBar } from '@/store/slices/progressBarSlice';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

export const Main: FC = () => {
	const [shouldPoll, setShouldPoll] = useState(false); // Флаг для управления опросом
	const transfersFilter = useSelector(
		(state: { transfersFilter: { activeFilters: string } }) =>
			state.transfersFilter.activeFilters
	);
	const progress = useSelector(
		(state: { progress: { progress: number } }) => state.progress.progress
	);

	const tickets = useSelector(
		(state: { tickets: { tickets: ITicketItem[] } }) =>
			state.tickets.tickets
	);

	const dispatch = useDispatch();
	const changeProgress = (value: number) =>
		dispatch(setProgressBar(value));

	const {
		data: searchId,
		isFetching: isSearchIdFetching,
		isError: searchIdError
	} = useGetSearchIdQuery();

	const {
		data: ticketsData,
		isFetching: isTicketsFetching, // Отслеживаем выполнение запросов		isError: ticketsError
		isError: ticketsError
	} = useGetTicketsQuery(searchId, {
		skip: !searchId,
		pollingInterval: !shouldPoll ? 1000 : 0 // Опрос включается или выключается
	});

	const isFetching =
		isSearchIdFetching || isTicketsFetching || !shouldPoll;
	const isError = searchIdError || ticketsError;

	useEffect(() => {
		if (ticketsData?.stop === true) {
			setShouldPoll(true);
			changeProgress(100);
		} else {
			const totalResources = 12000; // Общее количество ресурсов
			const loadedResources = tickets.length; // Загруженные ресурсы
			const percentage = (loadedResources / totalResources) * 100;

			changeProgress(percentage);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ticketsData]);

	return (
		<>
			<LoadingBar
				color="#2196f3"
				progress={progress}
				onLoaderFinished={() => changeProgress(0)}
			/>
			<section className={styles.wrapper}>
				<TransfersFilter />
				<div className={styles['right-wrapper']}>
					<AdditionalFilter />
					{!transfersFilter.length && (
						<p className={styles.info}>
							По вашему запросу билетов не найдено
						</p>
					)}
					{(transfersFilter.length && isFetching && (
						<p className={styles.info}>Поиск билетов, ожидайте ...</p>
					)) ||
						null}
					{(transfersFilter.length && isError && (
						<p className={styles.info}>Ошибка при загрузке билетов</p>
					)) ||
						null}
					{(transfersFilter.length && <TicketList />) || null}
					{(transfersFilter.length && <ShowMoreButton />) || null}
				</div>
			</section>
		</>
	);
};
