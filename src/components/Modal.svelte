<script lang="ts">
	import CalendarIcon from '../assets/today.svelte';
	import AlarmIcon from '../assets/alarm_on.svelte';
	import ChevronDownIcon from '../assets/chevron-down.svelte';
	import ChevronUpIcon from '../assets/chevron-up.svelte';
	import ChevronUp from '../assets/chevron-up.svelte';
	import ChevronDown from '../assets/chevron-down.svelte';
	import Button from './Button.svelte';

	export let closeModal: () => void;
</script>

<div class="modal">
	<div class="modal-content">
		<label>
			<AlarmIcon /><input />
		</label>
		<label>
			<CalendarIcon /><input />
		</label>

		<di class="dial">
			<div class="dial-wrapper">
				<ChevronUp />
				<p>00</p>
				<ChevronDown />
			</div>
			<p>:</p>
			<div class="dial-wrapper">
				<ChevronUp />
				<p>00</p>
				<ChevronDown />
			</div>
			<p />
			<div class="dial-wrapper">
				<ChevronUp />
				<p>PM</p>
				<ChevronDown />
			</div>
		</di>
		<Button text="Save" />
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

	input {
		border: 1px solid var(--line-normal);
		padding: 20px 20px;
		border-radius: 12px;
	}

	label {
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
		gap: 10px;
	}
	.dial-wrapper > p {
		font-size: 26px;
	}

	.dial-wrapper:last-child p {
		font-size: 20px;
	}
</style>
