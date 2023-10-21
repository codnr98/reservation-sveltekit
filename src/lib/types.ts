export type Table = {
	id: string;
	number: number;
	floor: number;
	isUse: boolean;
};

export type Reservation = {
	id: string;
	name: string;
	phoneNum: string;
	date: Date;
	guest: number;
	table: Table[];
	note: string;
	isSeat: boolean;
};

export type ReservationList = Reservation[];

export type SaveDate = {
	month: number;
	date: number;
	hour: number;
	minute: number;
};
