import { IRouteInfo } from '../route-info/route-info.interface';

export interface ITicketItem {
	price: string;
	carrier: string;
	segments: IRouteInfo[];
}
