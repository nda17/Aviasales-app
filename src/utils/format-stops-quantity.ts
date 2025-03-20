export const formatStopsQuantity = (stops: string[]) => {
	let stopsResult = '';

	if (!stops.length) {
		stopsResult = 'БЕЗ ПЕРЕСАДОК';
	} else if (stops.length === 1) {
		stopsResult = '1 ПЕРЕСАДКА';
	} else {
		stopsResult = `${stops.length} ПЕРЕСАДКИ`;
	}

	return stopsResult;
};
