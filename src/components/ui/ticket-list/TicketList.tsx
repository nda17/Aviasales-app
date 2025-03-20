import { ITicketItem } from '@/components/ui/ticket-item/ticket-item.interface';
import { TicketItem } from '@/components/ui/ticket-item/TicketItem';
import styles from '@/components/ui/ticket-list/TicketList.module.scss';
import { sortedTickets } from '@/utils/sorted-tickets';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export const TicketList: FC = () => {
	const tickets = useSelector(
		(state: { tickets: { tickets: ITicketItem[] } }) =>
			state.tickets.tickets
	);
	const quantityTickets = useSelector(
		(state: { showMoreTickets: { quantity: number } }) =>
			state.showMoreTickets.quantity
	);

	const transfersFilter = useSelector(
		(state: { transfersFilter: { activeFilters: string[] } }) =>
			state.transfersFilter.activeFilters
	);

	const additionalFilter = useSelector(
		(state: { additionalFilter: { activeFilter: string } }) =>
			state.additionalFilter.activeFilter
	);

	const sortedResult =
		sortedTickets(tickets, transfersFilter, additionalFilter) || [];

	// console.log(sortedResult, 6);
	const ticketsQuantityVisible = sortedResult.slice(0, quantityTickets);

	return (
		<ul className={styles.wrapper}>
			{ticketsQuantityVisible.map(ticket => {
				return <TicketItem key={uuidv4()} {...ticket} />;
			})}
		</ul>
	);
};
