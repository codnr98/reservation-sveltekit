<script lang="ts">
	import AddIcon from '../assets/add.svelte';

	export let text: string;
</script>

<button class="reservation-button"
	><AddIcon />
	<p>{text}</p></button
>

<style>
	button {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 12px 18px;
		border-radius: 8px;
		color: var(--orange500);
		background-color: var(--background-primary2);
		box-shadow: var(--shadow);
	}

	p {
		font-size: 17px;
	}
</style>
