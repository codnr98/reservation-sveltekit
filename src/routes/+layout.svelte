<script>
	import '../lib/styles/reset.css';
	import '../lib/styles/theme.css';
	import CloseIcon from '../assets/close.svelte';
	import { page } from '$app/stores';
	import Button from '../components/Button.svelte';

	const location = $page.url.pathname;
</script>

<header>
	<div class="right-btn-wrapper">
		{#if location === '/'}
			<Button text={'New Reservation'} />
		{/if}
	</div>

	<h1>Reservation</h1>

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
		padding: 5px 10px;
		background-color: var(--background-primary);
		justify-content: space-between;
	}

	.right-btn-wrapper {
		flex: 1 1 0%;
	}

	h1 {
		font-size: 24px;
		color: var(--black300);
		font-weight: 300;
		text-align: center;
		flex: 3 1 0%;
	}

	.left-btn-wrapper {
		flex: 1 1 0%;
		text-align: right;
	}
</style>
