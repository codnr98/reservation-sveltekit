<script lang="ts">
	import CalendarIcon from '../assets/today.svelte';
	import AlarmIcon from '../assets/alarm_on.svelte';
	import ChevronUpIcon from '../assets/chevron-up.svelte';
	import ChevronDownIcon from '../assets/chevron-down.svelte';
	import Button from './Button.svelte';

	export let closeModal: () => void;

	let hour = 12;
	let minute = 0;
	let ampm = 'AM';

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

	const padZero = (num: number) => num.toString().padStart(2, '0');
</script>

<div class="modal">
	<div class="modal-content">
		<div class="indicator-wrapper">
			<AlarmIcon />
			<div class="indicator">
				{`${padZero(hour)}:${padZero(minute)} ${ampm}`}
			</div>
		</div>
		<div class="indicator-wrapper">
			<CalendarIcon />
			<div class="indicator" />
		</div>

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

		<div class="button-container">
			<div class="button-wrapper">
				<Button icon={'trash'} color={'normal'} sizeAlign={'outer'} onClick={closeModal} />
			</div>
			<div class="button-wrapper">
				<Button text="Save" color={'orange'} sizeAlign={'outer'} onClick={closeModal} />
			</div>
		</div>
	</div>
</div>

<style>
	.modal {
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
	}

	.indicator {
		border: 1px solid var(--line-normal);
		padding: 20px 20px;
		border-radius: 12px;
		width: 250px;
		color: var(--black300);
	}

	.indicator-wrapper {
		display: flex;
		align-items: center;
		gap: 10px;
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
		width: 40px;
	}
	.dial-wrapper > p {
		font-size: 26px;
	}

	.dial-wrapper:last-child p {
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
</style>
