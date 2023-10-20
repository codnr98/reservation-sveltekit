<script>
	import DorpDownIcon from '../assets/arrow_drop_down.svelte';
</script>

<div class="select-wrapper">
	<div class="select">
		<ul class="select-item-container">
			<li>hiufasdjf</li>
			<li>hiufasdjf</li>
		</ul>
		<!-- <option>Select Table</option>
		<option>option1</option>
		<option>option2</option>
		<option>option3</option> -->
		<div class="icon-wrapper"><DorpDownIcon /></div>
	</div>
</div>

<style>
	.select-wrapper {
		border: solid 1px var(--line-normal);
		border-radius: 12px;
		width: 55%;
	}

	.select {
		/* padding: 22px 22px; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		color: var(--line-normal);
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0);
	}

	.select-item-container {
		display: flex;
		gap: 10px;
	}

	.icon-wrapper {
	}
</style>
