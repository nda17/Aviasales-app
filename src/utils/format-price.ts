export const formatPrice = (price: number) => {
	const priceStr = price.toString();
	const formattedPrice = `${priceStr.slice(0, 2)} ${priceStr.slice(2, priceStr.length)} ₽`;

	return formattedPrice;
};
