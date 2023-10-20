<script lang="ts">
	import { clickOutside } from '$lib/utils';
	import { tableList } from '../stores/tableStore';

	import DorpDownIcon from '../assets/arrow_drop_down.svelte';
	import type { Table } from '$lib/types';

	let isDrop = false;
	let selectTable: Table[] = [];

	const handlerClickSelect = (event: MouseEvent) => {
		event.stopPropagation();
		isDrop = true;
	};

	const handlerClickSelectOutside = () => {
		isDrop = false;
	};

	const isInclude = (arr: Array<Table>, value: Table) => arr.includes(value);
</script>

<div class="select-wrapper">
	<button class="select" on:click={handlerClickSelect}>
		<ul class="select-item-container">
			{#each selectTable as value}
				<li>{`Table ${value.number} · Floor ${value.floor}`}</li>
			{:else}
				<li>{'Select Table'}</li>
			{/each}
		</ul>
		<DorpDownIcon />
	</button>

	{#if isDrop}
		<fieldset use:clickOutside={handlerClickSelectOutside}>
			{#each $tableList as table}
				<div>
					<input
						type="checkbox"
						checked={isInclude(selectTable, table)}
						id={table.id}
						on:click={() => {
							if (isInclude(selectTable, table)) {
								selectTable = selectTable.filter(value => value.id !== table.id);
							} else {
								selectTable = [...selectTable, table];
							}
						}}
					/>
					<label for={table.id}>
						{`Table ${table.number} · Floor ${table.floor}`}
					</label>
				</div>
			{/each}
		</fieldset>
	{/if}
</div>

<style>
	.select-wrapper {
		width: 55%;
		position: relative;
	}

	.select {
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

	fieldset {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 180px;
		overflow: auto;
		padding: 5px 16px;
		margin-top: 10px;
		border: solid 1px var(--line-normal);
		border-radius: 12px;
		background-color: var(--background-primary);
		color: var(--line-normal);
	}

	fieldset > div {
		padding: 12px 0;
		border-bottom: solid 1px var(--line-normal);
		display: flex;
		gap: 5px;
	}

	fieldset > div:last-child {
		border-bottom: none;
	}
</style>
