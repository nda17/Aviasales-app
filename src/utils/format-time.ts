export const formatTime = (minutes: number) => {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	const timeResult = `${hours.toString().padStart(2, '0')}ч ${remainingMinutes.toString().padStart(2, '0')}м`;

	return timeResult;
};
