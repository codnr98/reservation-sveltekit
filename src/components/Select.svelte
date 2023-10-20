<script lang="ts">
	import { clickOutside } from '$lib/utils';
	import DorpDownIcon from '../assets/arrow_drop_down.svelte';

	import { tableList } from '../stores/tableStore';
	let isDrop = false;

	const handlerClickSelect = (event: MouseEvent) => {
		event.stopPropagation();
		isDrop = true;
		console.log(isDrop);
	};

	const handlerClickSelectOutside = () => {
		isDrop = false;
		console.log(isDrop);
	};

	console.log(isDrop);
</script>

<div class="select-wrapper">
	<button class="select" on:click={handlerClickSelect}>
		<ul class="select-item-container">
			<li>hiufasdjf</li>
			<li>hiufasdjf</li>
		</ul>
		<DorpDownIcon />
	</button>

	{#if isDrop}
		<ul class="option-list" use:clickOutside={handlerClickSelectOutside}>
			{#each $tableList as table}
				<li>{`Table ${table.number} · Floor ${table.floor}`}</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.select-wrapper {
		width: 55%;
		position: relative;
	}

	.select {
		/* padding: 22px 22px; */
		border: solid 1px var(--line-normal);
		border-radius: 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		color: var(--line-normal);
		height: 100%;
		width: 100%;
	}

	.select-item-container {
		display: flex;
		gap: 10px;
	}

	.option-list {
		z-index: 1;
		background-color: var(--background-primary);
		border-radius: 12px;
		position: absolute;
		width: 100%;
		height: 180px;
		overflow: auto;
		padding: 5px 16px;
		margin-top: 10px;
		border: solid 1px var(--line-normal);
		color: var(--line-normal);
	}

	.option-list > li {
		padding: 5px 0;
		border-bottom: solid 1px var(--line-normal);
	}

	.option-list > li:last-child {
		border-bottom: none;
	}

	.disable {
		display: none;
	}
</style>
