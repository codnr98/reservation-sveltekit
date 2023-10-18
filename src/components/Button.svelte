<script lang="ts">
	import AddIcon from '../assets/add.svelte';

	export let text: string;
	export let onClick: () => void;
</script>

<button class="reservation-button" on:click={onClick}
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
		cursor: pointer;
	}

	p {
		font-size: 17px;
	}
</style>
