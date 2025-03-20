import { IRouteInfo } from '@/components/ui/route-info/route-info.interface';

export interface ITicketItem {
	price: number;
	carrier: string;
	segments: IRouteInfo[];
}
