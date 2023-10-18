<script>
	import '../lib/styles/reset.css';
	import '../lib/styles/theme.css';
	import AddIcon from '../assets/add.svelte';
	import CloseIcon from '../assets/close.svelte';
</script>

<header>
	<div class="button-wrapper">
		<button class="reservation-button"
			><AddIcon />
			<p>New Reservation</p></button
		>
	</div>

	<h1>Reservation</h1>

	<div class="close-btn-wrapper">
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

	h1 {
		font-size: 24px;
		color: var(--black300);
		font-weight: 300;
		text-align: center;
		flex: 3 1 0%;
	}

	.button-wrapper {
		flex: 1 1 0%;
	}

	.reservation-button {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 12px 18px;
		border-radius: 8px;
		color: var(--orange500);
		background-color: var(--background-primary2);
		box-shadow: var(--shadow);
	}

	.close-btn-wrapper {
		flex: 1 1 0%;
		text-align: right;
	}

	p {
		font-size: 17px;
	}
</style>
