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

	const countReservation = () => {
		let count = 0;
		$reservationList.forEach(ele => {
			if (ele.isSeat) count++;
		});
		return count;
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

		{#if $page.url.pathname === '/add-reservation' || $page.url.pathname.startsWith('/edit/')}
			<Button
				color={'normal'}
				sizeAlign={'inner'}
				icon={'arrow-left'}
				text={''}
				onClick={handleClickPreviousButton}
			/>
		{/if}
	</div>

	<div class="title">
		{#if $page.url.pathname === '/'}
			<h1>Reservation</h1>
			{#if countReservation()}
				<div>{countReservation()}</div>
			{/if}
		{/if}
		{#if $page.url.pathname === '/add-reservation'}
			<h1>New Reservation</h1>
		{/if}
		{#if $page.url.pathname.startsWith('/edit/')}
			<h1>Edit Reservation</h1>
		{/if}
	</div>

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
