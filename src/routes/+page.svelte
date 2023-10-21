<script>
	import Card from '../components/Card.svelte';
	import { reservationList } from '../stores/reservationStore';

	const mockData = {
		id: new Date().toString(),
		name: 'Lee',
		phoneNum: '010-123-1234',
		date: new Date(),
		guest: 2,
		table: [
			{
				id: '1',
				number: 8,
				floor: 1
			},
			{
				id: '1',
				number: 8,
				floor: 1
			}
		],
		note: '많이 주세요'
	};

	reservationList.update(list => [...list, mockData]);
</script>

<content>
	{#each $reservationList as card (card.id)}
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
