<script lang="ts">
	import AddIcon from '../assets/add.svelte';
	import ArrowLeftIcon from '../assets/keyboard_backspace.svelte';
	export let text: string;
	export let icon: 'arrow-left' | 'add';
	export let onClick: () => void;
</script>

<button class={icon !== 'add' ? 'icon-button' : null} on:click={onClick}
	>{#if icon === 'arrow-left'}
		<ArrowLeftIcon />
	{/if}

	{#if icon === 'add'}
		<AddIcon />
	{/if}
	<p>{text}</p></button
>

<style>
	button {
		display: flex;
		align-items: center;
		padding: 10px 10px;
		border-radius: 8px;
		color: var(--orange500);
		background-color: var(--background-primary2);
		box-shadow: var(--shadow);
		cursor: pointer;
	}

	.icon-button {
		padding: 4px 4px;
	}

	p {
		font-size: 17px;
	}
</style>
