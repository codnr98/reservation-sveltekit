<script lang="ts">
	import CalendarIcon from '../assets/today.svelte';
	import AlarmIcon from '../assets/alarm_on.svelte';
	import ChevronUpIcon from '../assets/chevron-up.svelte';
	import ChevronDownIcon from '../assets/chevron-down.svelte';
	import Button from './Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { translator } from '$lib/utils';
	import type { SaveDate } from '$lib/types';

	export let closeModal: () => void;

	export let saveDate: Date;

	const currentYear = new Date().getFullYear();

	let selectOption = 'time';

	let month = 1;
	let day = 1;
	let hour = 12;
	let minute = 0;
	let ampm = 'AM';

	const loadDate = (saveDate: Date) => {
		const x = translator(saveDate, 'value') as SaveDate;
		if (x.month > 12) {
			month = x.month - 12;
			ampm = 'PM';
		} else {
			month = x.month;
			ampm = 'AM';
		}
		day = x.date;
		hour = x.hour;
		minute = x.minute;
	};

	$: loadDate(saveDate);

	const padZero = (num: number) => num.toString().padStart(2, '0');

	const dayOfMonth = (month: number) => {
		const thirtyMonth = [4, 6, 9, 11];
		const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

		if (month === 2) return isLeapYear(currentYear) ? 29 : 28;

		return thirtyMonth.includes(month) ? 30 : 31;
	};

	const getMonthName = (monthNumber: number) => {
		const date = new Date();
		date.setMonth(monthNumber - 1);

		return date.toLocaleString('en-US', { month: 'long' });
	};

	const incrementHour = () => {
		if (hour === 12) toggleAMPM();
		hour = hour === 12 ? 1 : hour + 1;
	};
	const decrementHour = () => {
		if (hour === 1) toggleAMPM();
		hour = hour === 1 ? 12 : hour - 1;
	};
	const incrementMinute = () => {
		minute++;
		if (minute > 59) {
			minute = 0;
			incrementHour();
		}
	};
	const decrementMinute = () => {
		minute--;
		if (minute < 0) {
			minute = 59;
			decrementHour();
		}
	};
	const toggleAMPM = () => {
		ampm = ampm === 'AM' ? 'PM' : 'AM';
	};

	const incrementMonth = () => {
		month = month === 12 ? 1 : month + 1;
	};
	const decrementMonth = () => {
		month = month === 1 ? 12 : month - 1;
	};
	const incrementDay = () => {
		day++;
		if (day > dayOfMonth(month)) {
			day = 1;
			incrementMonth();
		}
	};
	const decrementDay = () => {
		day--;
		if (day < 1) {
			day = dayOfMonth(month - 1);
			decrementMonth();
		}
	};

	const dispatch = createEventDispatcher();

	const dateObject = () => {
		let twentyFourHour = hour;
		if (ampm === 'PM') {
			twentyFourHour = hour === 24 ? 0 : hour + 12;
		}
		return new Date(currentYear, month - 1, day, twentyFourHour, minute);
	};

	const dispatchData = () => {
		dispatch('date', {
			date: dateObject()
		});
		closeModal();
	};
</script>

<div class="modal-outside">
	<div class="modal-content">
		<button
			class="indicator-wrapper"
			on:click={() => {
				selectOption = 'time';
			}}
		>
			<AlarmIcon />
			<div class="{selectOption === 'time' ? 'active' : ''} indicator">
				{`${padZero(hour)}:${padZero(minute)} ${ampm}`}
			</div>
		</button>

		<button
			class="indicator-wrapper"
			on:click={() => {
				selectOption = 'date';
			}}
		>
			<CalendarIcon />
			<div class="{selectOption === 'date' ? 'active' : ''} indicator">
				{`${getMonthName(month)} ${day}`}
			</div>
		</button>

		{#if selectOption === 'time'}
			<div class="dial">
				<div class="dial-wrapper">
					<button on:click={incrementHour}>
						<ChevronUpIcon />
					</button>
					<p>{padZero(hour)}</p>
					<button on:click={decrementHour}>
						<ChevronDownIcon />
					</button>
				</div>
				<p>:</p>
				<div class="dial-wrapper">
					<button on:click={incrementMinute}>
						<ChevronUpIcon />
					</button>
					<p>{padZero(minute)}</p>
					<button on:click={decrementMinute}>
						<ChevronDownIcon />
					</button>
				</div>
				<p />
				<div class="dial-wrapper">
					<button on:click={toggleAMPM}>
						<ChevronUpIcon />
					</button>
					<p>{ampm}</p>
					<button on:click={toggleAMPM}>
						<ChevronDownIcon />
					</button>
				</div>
			</div>
		{/if}

		{#if selectOption === 'date'}
			<div class="dial">
				<div class="dial-wrapper">
					<button on:click={incrementMonth}>
						<ChevronUpIcon />
					</button>
					<p>{getMonthName(month)}</p>
					<button on:click={decrementMonth}>
						<ChevronDownIcon />
					</button>
				</div>
				<div class="dial-wrapper">
					<button on:click={incrementDay}>
						<ChevronUpIcon />
					</button>
					<p>{padZero(day)}</p>
					<button on:click={decrementDay}>
						<ChevronDownIcon />
					</button>
				</div>
			</div>
		{/if}
		<div class="button-container">
			<div class="button-wrapper">
				<Button icon={'trash'} color={'normal'} sizeAlign={'outer'} onClick={closeModal} />
			</div>
			<div class="button-wrapper">
				<Button text="Save" color={'orange'} sizeAlign={'outer'} onClick={dispatchData} />
			</div>
		</div>
	</div>
</div>

<style>
	.modal-outside {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	.modal-content {
		background-color: white;
		padding: 18px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		border-radius: 12px;
		width: 30%;
	}

	.indicator-wrapper {
		display: flex;
		align-items: center;
		width: 250px;
		gap: 10px;
	}

	.indicator {
		width: 100%;
		text-align: start;
		border: 1px solid var(--line-normal);
		padding: 20px 20px;
		border-radius: 12px;
		color: var(--black300);
	}

	.dial {
		display: flex;
		width: 60%;
		justify-content: center;
		align-items: center;
		gap: 18px;
	}

	.dial-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100px;
		width: 80px;
	}
	.dial-wrapper > p {
		font-size: 26px;
	}

	.dial-wrapper:nth-child(5) p {
		font-size: 20px;
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

	.active {
		border: 2px solid var(--orange500);
	}
</style>
