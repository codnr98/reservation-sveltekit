<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Table } from '$lib/types';
	import { translator } from '$lib/utils/dateUtils';
	import Button from '../../components/Button.svelte';
	import Modal from '../../components/Modal.svelte';
	import Select from '../../components/Select.svelte';
	import { reservationList } from '../../stores/reservationStore';
	import { tableList } from '../../stores/tableStore';

	let showModal = false;

	let nameValue = '';
	let phoneValue = '';
	let guests = 0;
	let reservationDate: Date;
	let reservationTables: Table[] = [];
	let note = '';

	const openModal = () => {
		showModal = true;
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		showModal = false;
		document.body.style.overflow = '';
	};

	const handleDate = (e: CustomEvent<{ date: Date }>) => {
		reservationDate = e.detail.date;
	};

	const handleSelectTable = (e: CustomEvent<{ selectTable: Table[] }>) => {
		reservationTables = [...e.detail.selectTable];
		console.log(reservationTables);
	};

	const handleClickSubmitButton = () => {
		const pathData = {
			id: new Date().toString(),
			name: nameValue,
			phoneNum: phoneValue,
			date: reservationDate,
			guest: guests,
			table: reservationTables,
			note: note,
			isSeat: false
		};

		reservationList.update(list => [...list, pathData]);

		tableList.update(tables =>
			tables.map(table => {
				if (reservationTables.some(selected => selected.id === table.id)) {
					return { ...table, isUse: true };
				} else {
					return table;
				}
			})
		);

		setTimeout(() => {
			goto('/');
		}, 0);
	};

	const buttonText = (date: Date) => {
		return date ? (translator(date, 'string') as string) : 'Select Date';
	};
</script>

{#if showModal}
	<Modal {closeModal} on:date={handleDate} saveDate={reservationDate} />
{/if}

<form>
	<div class="first">
		<input placeholder="name＊" bind:value={nameValue} />
		<input placeholder="phone＊" bind:value={phoneValue} />
		<div class="button-wrapper">
			<Button
				color={'normal'}
				sizeAlign={'outer'}
				icon={'calendar'}
				text={buttonText(reservationDate)}
				onClick={openModal}
			/>
		</div>
	</div>

	<div class="second">
		<div class="counter-container">
			<p class="title">Guests</p>
			<div class="counter">
				<Button
					color={'normal'}
					text={''}
					icon={'minus'}
					sizeAlign={'inner'}
					onClick={() => {
						if (guests > 0) guests--;
					}}
				/>

				<p class="count">{guests}</p>

				<Button
					color={'normal'}
					text={''}
					icon={'plus'}
					sizeAlign={'inner'}
					onClick={() => {
						guests++;
					}}
				/>
			</div>
		</div>
		<Select on:table={handleSelectTable} />
	</div>

	<div class="third">
		<textarea placeholder={'Add Note...'} bind:value={note} />
	</div>

	<div class="submit-button-wrapper">
		<Button
			disable={!(nameValue.length > 0 && phoneValue.length > 0)}
			color={'orange'}
			text={'Save'}
			icon={null}
			sizeAlign={'outer'}
			onClick={handleClickSubmitButton}
		/>
	</div>
</form>

<style>
	form {
		padding: 12px 26px;
		background-color: var(--background-primary);
	}

	input {
		border: 1px solid var(--line-normal);
		padding: 22px 22px;
		border-radius: 12px;
	}

	.first {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		gap: 20px;
	}

	.first > * {
		width: 100%;
	}

	.button-wrapper {
		height: 90%;
	}

	.second {
		display: flex;
		justify-content: space-between;
		padding: 40px 0px;
	}

	.counter-container {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.counter {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		gap: 5px;
	}

	.count {
		text-align: center;
		font-size: 24px;
	}

	.title {
		color: var(--black300);
	}

	textarea {
		outline: none;
		resize: none;
		border: 1px solid var(--line-normal);
		padding: 22px 22px;
		border-radius: 12px;
		box-sizing: border-box;
		width: 100%;
		height: 200px;
		color: var(--black300);
		margin-bottom: 80px;
	}

	.submit-button-wrapper {
		height: 80px;
	}
</style>
