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
