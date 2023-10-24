<script lang="ts">
	import PhoneIcon from '../assets/phone.svelte';
	import CalenderIcon from '../assets/today.svelte';
	import GroupIcon from '../assets/group.svelte';
	import EditIcon from '../assets/edit.svelte';
	import Button from './Button.svelte';
	import type { Reservation } from '$lib/types';
	import { translator } from '$lib/utils/dateUtils';
	import { reservationList } from '../stores/reservationStore';
	import { tableList } from '../stores/tableStore';
	import { goto } from '$app/navigation';

	export let props: Reservation;

	let isSeat = false;

	const handleClickDeleteButton = (e: MouseEvent) => {
		e.stopPropagation();
		reservationList.update(list => (list = [...list.filter(item => item.id !== props.id)]));

		tableList.update(tables =>
			tables.map(table => {
				if (props.table.some(selected => selected.id === table.id)) {
					return { ...table, isUse: false };
				} else {
					return table;
				}
			})
		);
	};

	const handleClickSeatedButton = () => {
		reservationList.update(reservations =>
			reservations.map(reservation => {
				if (reservation.id === props.id) {
					return { ...reservation, isSeat: true };
				} else {
					return reservation;
				}
			})
		);
	};

	const handleClickCard = () => {
		goto(`/edit/${props.id}`);
	};
</script>

<button on:click={handleClickCard} class="{isSeat ? 'disable' : ''} article">
	<div class="customer-info">
		<h3>{props.name}</h3>
		<div class="phone-num">
			<PhoneIcon />
			<p>{props.phoneNum}</p>
		</div>
	</div>

	<div class="reservation-info">
		<div class="date-info">
			<CalenderIcon />
			<p>
				{translator(props.date, 'string')}
			</p>
		</div>

		<div class="guest-info">
			<div class="icon-wrapper">
				<GroupIcon />
			</div>
			<p>{props.guest}</p>
		</div>

		<div class="table-info">
			{#if props.table.length}
				<p>{'Reserved Table'}</p>
				<p>{props.table.map(table => `${table.number}`)}</p>
				<p>· Floor {props.table.map(table => `${table.floor}`)}</p>
			{:else}
				<p class="empty">No Selected Table</p>
			{/if}
		</div>

		<div class="note-info">
			<p>{props.note}</p>
			<EditIcon />
		</div>
	</div>

	<div class="button-container">
		<div class="button-wrapper">
			<Button
				icon={'trash'}
				color={'normal'}
				sizeAlign={'outer'}
				onClick={handleClickDeleteButton}
			/>
		</div>
		<div class="button-wrapper">
			<Button
				text="Seated"
				color={'orange'}
				sizeAlign={'outer'}
				onClick={handleClickSeatedButton}
			/>
		</div>
	</div>
</button>

<style>
	.article {
		display: flex;
		flex-direction: column;
		gap: 28px;
		background-color: var(--background-primary);
		border-radius: 12px;
		padding: 16px;
		color: var(--black300);
		font-size: 20px;
	}

	.customer-info {
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 400;
	}

	.phone-num {
		display: flex;
		box-shadow: var(--shadow);
		padding: 10px 6px;
		border-radius: 16px;
		gap: 4px;
		align-items: end;
	}

	.reservation-info {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.date-info {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.guest-info {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.icon-wrapper {
		padding: 0 4px;
	}

	.table-info {
		display: flex;
		gap: 6px;
		font-size: 18px;
	}

	.table-info > p:nth-child(2) {
		color: var(--black400);
		font-size: 20px;
	}

	.empty {
		color: var(--black300);
		font-style: italic;
		font-size: 17px;
	}

	.note-info {
		display: flex;
		font-size: 18px;
		align-items: center;
		gap: 6px;
	}

	.button-container {
		display: flex;
		width: 100%;
		gap: 16px;
	}

	.button-container > * {
		flex: 1 1 0%;
	}

	.button-container > div:last-child {
		flex: 3 1 0%;
	}

	.disable {
		display: none;
	}
</style>
