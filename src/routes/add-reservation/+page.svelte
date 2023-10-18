<script>
	import Button from '../../components/Button.svelte';

	const handleClickSelectDateButton = () => {};
</script>

<form>
	<div>
		<input placeholder="name" /><input placeholder="phone" /><Button
			icon={'calendar'}
			text={'Select Date'}
			onClick={handleClickSelectDateButton}
		/>
	</div>
</form>

<style>
	input {
		border: 1px solid var(--line-normal);
	}
</style>
