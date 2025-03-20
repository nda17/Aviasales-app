import { ITicketItem } from '@/components/ui/ticket-item/ticket-item.interface';

interface ISegment {
	stops: string[];
}

export const sortedTickets = (
	tickets: ITicketItem[],
	transfersFilter: string[],
	additionalFilter: string
) => {
	let result = [];
	let transfersResult = [];

	// Если включен фильтр 'all', используем для дополнительного фильтра весь список билетов
	if (transfersFilter.includes('all')) {
		transfersResult = tickets;
	}

	// Создаем карту для сопоставления фильтров и их значений
	const filterMap = {
		'no-transfers': 0,
		'one-transfers': 1,
		'two-transfers': 2,
		'three-transfers': 3
	};

	// Получаем массив всех допустимых значений остановок
	const allowedStops = transfersFilter.map(filter => filterMap[filter]);

	// Фильтруем билеты, проверяя, что количество остановок в каждом сегменте соответствует одному из допустимых значений
	const transfersFilterResult = tickets.filter((ticket: ITicketItem) => {
		const stopsA = ticket.segments[0].stops.length;
		const stopsB = ticket.segments[1].stops.length;

		return allowedStops.includes(stopsA) && allowedStops.includes(stopsB);
	});

	transfersResult = transfersFilterResult;

	//Фильтруем полученный transfersResult по условию дополнительного фильтра
	switch (additionalFilter) {
		case 'cheap':
			//Сортировка по самой дешевой цене билета
			result = transfersResult.sort((a, b) => a.price - b.price);
			break;
		case 'fast':
			//Сортировка по количеству пересадок
			result = transfersResult.sort((a, b) => {
				const stopsA = a.segments.reduce(
					(acc: number, segment: ISegment) => acc + segment.stops.length,
					0
				);
				const stopsB = b.segments.reduce(
					(acc: number, segment: ISegment) => acc + segment.stops.length,
					0
				);
				return stopsA - stopsB;
			});
			break;
		case 'optimal':
			//Сортировка по количеству пересадок, если они равны, то по цене билета
			result = transfersResult.sort((a, b) => {
				const stopsA = a.segments.reduce(
					(acc: number, segment: ISegment) => acc + segment.stops.length,
					0
				);
				const stopsB = b.segments.reduce(
					(acc: number, segment: ISegment) => acc + segment.stops.length,
					0
				);

				if (stopsA === stopsB) {
					return a.price - b.price;
				}

				return stopsA - stopsB;
			});
			break;
	}

	return result;
};
