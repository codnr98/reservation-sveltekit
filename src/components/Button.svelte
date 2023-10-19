<script lang="ts">
	import AddIcon from '../assets/add.svelte';
	import ArrowLeftIcon from '../assets/keyboard_backspace.svelte';
	import CalendarIcon from '../assets/today.svelte';
	import MinusIcon from '../assets/math-minus.svelte';
	import PlusIcon from '../assets/math-plus.svelte';
	export let text: string;
	export let icon: 'arrow-left' | 'add' | 'calendar' | 'minus' | 'plus';
	export let sizeAlign: 'inner' | 'outer';
	export let onClick: () => void;
</script>

<button
	class="{icon !== 'add' ? 'icon-button' : ''} {sizeAlign === 'outer' ? 'outer' : ''}"
	on:click={onClick}
	>{#if icon === 'arrow-left'}
		<ArrowLeftIcon />
	{/if}
	{#if icon === 'add'}
		<AddIcon />
	{/if}
	{#if icon === 'calendar'}
		<CalendarIcon />
	{/if}
	{#if icon === 'minus'}
		<MinusIcon />
	{/if}
	{#if icon === 'plus'}
		<PlusIcon />
	{/if}
	{#if text}
		<p>{text}</p>
	{/if}
</button>

<style>
	button {
		display: flex;
		justify-content: center;
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
		color: var(--black300);
	}

	.outer {
		width: 100%;
		height: 100%;
	}

	p {
		font-size: 17px;
		margin-left: 8px;
	}
</style>
