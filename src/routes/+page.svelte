<script>
	import Card from '../components/Card.svelte';
	import { reservationList } from '../stores/reservationStore';

	const mockData = {
		id: '1',
		name: 'Lee',
		phoneNum: '010-123-1234',
		date: new Date(),
		guest: 2,
		table: {
			number: 8,
			floor: 1
		},
		note: '많이 주세요'
	};

	reservationList.update(list => [...list, mockData]);
	console.log($reservationList);
</script>

<content>
	{#each $reservationList as card}
		<Card props={card} />
	{/each}
</content>

<style>
	content {
		width: 100%;
		background-color: var(--background-secondary);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 16px;
		padding: 20px;
	}
</style>
