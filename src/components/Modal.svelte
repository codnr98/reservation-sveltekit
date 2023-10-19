<script lang="ts">
	export let closeModal: () => void;
</script>

<div class="modal">
	<div class="modal-content">
		<h2>Modal Content</h2>
		<button on:click={closeModal}>Close</button>
	</div>
</div>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	.modal-content {
		background-color: white;
		padding: 20px;
	}
</style>
