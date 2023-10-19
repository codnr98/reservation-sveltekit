<script>
	import Card from '../components/Card.svelte';
</script>

<div>
	<Card />
	<Card />
	<Card />
	<Card />
</div>

<style>
	div {
		width: 100%;
		height: 100vh;
		background-color: var(--background-secondary);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 16px;
		padding: 20px;
	}
</style>
