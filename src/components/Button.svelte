<script lang="ts">
	import AddIcon from '../assets/add.svelte';
	import ArrowLeftIcon from '../assets/keyboard_backspace.svelte';
	import CalendarIcon from '../assets/today.svelte';
	import MinusIcon from '../assets/math-minus.svelte';
	import PlusIcon from '../assets/math-plus.svelte';
	import TrashIcon from '../assets/trash.svelte';
	export let text: string = '';
	export let icon: 'arrow-left' | 'add' | 'calendar' | 'minus' | 'plus' | 'trash' | null = null;
	export let sizeAlign: 'inner' | 'outer';
	export let color: 'orange' | 'normal' | 'text-orange';
	export let onClick: () => void;
	export let disable: boolean = false;
</script>

<button class="{sizeAlign} {color}" on:click={onClick} disabled={disable}
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
	{#if icon === 'trash'}
		<TrashIcon />
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
		box-shadow: var(--shadow);
		cursor: pointer;
		gap: 5px;
	}

	button:disabled {
		opacity: 50%;
		cursor: not-allowed;
	}

	.normal {
		color: var(--black300);
		background-color: var(--background-primary2);
	}

	.orange {
		color: white;
		background-color: var(--orange500);
	}

	.text-orange {
		color: var(--orange500);
		background-color: var(--background-primary2);
	}

	.outer {
		width: 100%;
		height: 100%;
	}

	p {
		font-size: 17px;
	}
</style>
