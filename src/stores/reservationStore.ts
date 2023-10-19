import type { ReservationList } from '$lib/types';
import { writable } from 'svelte/store';

export const reservationList = writable<ReservationList>([]);
