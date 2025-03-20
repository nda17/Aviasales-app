import { IRouteInfo } from '@/components/ui/route-info/route-info.interface';
import styles from '@/components/ui/route-info/RouteInfo.module.scss';
import { formatStopsAirports } from '@/utils/format-stops-airports';
import { formatStopsQuantity } from '@/utils/format-stops-quantity';
import { formatTime } from '@/utils/format-time';
import { formatTimeRange } from '@/utils/format-time-range';
import { FC } from 'react';

export const RouteInfo: FC<IRouteInfo> = ({
	origin,
	destination,
	date,
	duration,
	stops
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.column}>
				<span className={styles.title}>
					{origin} - {destination}
				</span>
				<span className={styles.value}>
					{formatTimeRange(date, duration)}
				</span>
			</div>
			<div className={styles.column}>
				<span className={styles.title}>В пути</span>
				<span className={styles.value}>{formatTime(duration)}</span>
			</div>
			<div className={styles.column}>
				<span className={styles.title}>{formatStopsQuantity(stops)}</span>
				<span className={styles.value}>{formatStopsAirports(stops)}</span>
			</div>
		</div>
	);
};
