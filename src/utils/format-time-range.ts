export const formatTimeRange = (date: Date, duration: number) => {
	const formatTime = (date: Date) => {
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	};

	const departureTime = new Date(date);
	const arrivalTime = new Date(departureTime.getTime() + duration * 60000);

	const formattedArrivalTime = formatTime(arrivalTime);
	const formattedDepartureTime = formatTime(departureTime);

	const timeRange = `${formattedArrivalTime} - ${formattedDepartureTime}`;

	return timeRange;
};
