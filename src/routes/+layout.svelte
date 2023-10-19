<script>
	import '../lib/styles/reset.css';
	import '../lib/styles/theme.css';
	import CloseIcon from '../assets/close.svelte';
	import { page } from '$app/stores';
	import Button from '../components/Button.svelte';
	import { goto } from '$app/navigation';
	import { reservationList } from '../stores/reservationStore';

	const handleClickAddButton = () => {
		goto('/add-reservation');
	};
	const handleClickPreviousButton = () => {
		goto('/..');
	};
</script>

<header>
	<div class="right-btn-wrapper">
		{#if $page.url.pathname === '/'}
			<Button
				color={'text-orange'}
				sizeAlign={'inner'}
				icon={'add'}
				text={'New Reservation'}
				onClick={handleClickAddButton}
			/>
		{/if}

		{#if $page.url.pathname === '/add-reservation'}
			<Button
				color={'normal'}
				sizeAlign={'inner'}
				icon={'arrow-left'}
				text={''}
				onClick={handleClickPreviousButton}
			/>
		{/if}
	</div>

	{#if $page.url.pathname === '/'}
		<div class="title">
			<h1>Reservation</h1>
			{#if $reservationList.length}
				<div>{$reservationList.length}</div>
			{/if}
		</div>
	{:else}
		<h1>New Reservation</h1>
	{/if}

	<div class="left-btn-wrapper">
		<button class="close-btn">
			<CloseIcon />
		</button>
	</div>
</header>

<slot />

<style>
	header {
		display: flex;
		align-items: center;
		padding: 15px 15px;
		background-color: var(--background-primary);
		justify-content: space-between;
		height: 80px;
	}

	.right-btn-wrapper {
		flex: 1 1 0%;
	}

	.title {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.title > h1 {
		font-size: 24px;
		color: var(--black300);
		font-weight: 300;
		text-align: center;
		flex: 3 1 0%;
	}

	.title > div {
		height: 25px;
		width: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		color: white;
		background-color: var(--orange500);
	}

	.left-btn-wrapper {
		flex: 1 1 0%;
		text-align: right;
	}
</style>
