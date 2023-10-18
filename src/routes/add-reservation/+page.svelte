<script>
	import Button from '../../components/Button.svelte';

	const handleClickSelectDateButton = () => {};
</script>

<form>
	<div class="first">
		<input placeholder="name" />
		<input placeholder="phone" />
		<div class="button-wrapper">
			<Button
				sizeAlign={'outer'}
				icon={'calendar'}
				text={'Select Date'}
				onClick={handleClickSelectDateButton}
			/>
		</div>
	</div>
</form>

<style>
	form {
		padding: 12px 26px;
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
</style>
