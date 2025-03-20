import { LOGO_CARRIER_URL } from '@/config/api.config';

export const generatePathLogoCarrier = (carrier: string) => {
	const pathLogo = `${LOGO_CARRIER_URL}${carrier}.png`;

	return pathLogo;
};
