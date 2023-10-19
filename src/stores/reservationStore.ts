import { writable } from 'svelte/store';

type Reservation = {
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

type ReservationList = Reservation[];

export const reservationList = writable<ReservationList>([]);
