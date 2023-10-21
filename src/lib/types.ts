export type Reservation = {
	id: string;
	name: string;
	phoneNum: string;
	date: Date;
	guest: number;
	table: {
		number: number;
		floor: number;
	};
	note: string;
};

export type ReservationList = Reservation[];

export type Table = {
	id: string;
	number: number;
	floor: number;
};

export type SaveDate = {
	month: number;
	date: number;
	hour: number;
	minute: number;
};
