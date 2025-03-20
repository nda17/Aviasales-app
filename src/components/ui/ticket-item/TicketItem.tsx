import { RouteInfo } from '@/components/ui/route-info/RouteInfo';
import { ITicketItem } from '@/components/ui/ticket-item/ticket-item.interface';
import styles from '@/components/ui/ticket-item/TicketItem.module.scss';
import { formatPrice } from '@/utils/format-price';
import { generatePathLogoCarrier } from '@/utils/generate-path-logo-carrier';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TicketItem: FC<ITicketItem> = ({
	price,
	carrier,
	segments
}) => {
	return (
		<li className={styles.wrapper}>
			<div className={styles['first-section']}>
				<p className={styles['price-ticket']}>{formatPrice(price)}</p>
				<img
					className={styles['logo-carrier']}
					src={generatePathLogoCarrier(carrier)}
					alt="Logo airlines"
				/>
			</div>
			<div className={styles['second-section']}>
				{segments.map(segment => {
					return <RouteInfo key={uuidv4()} {...segment} />;
				})}
			</div>
		</li>
	);
};
