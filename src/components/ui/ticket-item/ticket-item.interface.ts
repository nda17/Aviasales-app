import { IRouteInfo } from '../route-info/route-info.interface';

export interface ITicketItem {
	price: number;
	carrier: string;
	segments: IRouteInfo[];
}
