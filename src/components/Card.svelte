<script>
	import PhoneIcon from '../assets/phone.svelte';
	import CalenderIcon from '../assets/today.svelte';
	import GroupIcon from '../assets/group.svelte';
	import EditIcon from '../assets/edit.svelte';
	import Button from './Button.svelte';
</script>

<article>
	<div class="customer-info">
		<h3>Jason</h3>
		<div class="phone-num">
			<PhoneIcon />
			<p>010-000-0000</p>
		</div>
	</div>

	<div class="reservation-info">
		<div class="date-info">
			<CalenderIcon />
			<p>
				{'Today, 3:00 PM'}
			</p>
		</div>

		<div class="guest-info">
			<div class="icon-wrapper">
				<GroupIcon />
			</div>
			<p>4</p>
		</div>

		<div class="table-info">
			<p>{'Reserved Table'}</p>
			<p>7</p>
			<p>· Floor 1</p>
		</div>

		<div class="note-info">
			<p>Note</p>
			<EditIcon />
		</div>
	</div>

	<div class="button-container">
		<div class="button-wrapper">
			<Button icon={'trash'} color={'normal'} sizeAlign={'outer'} onClick={() => {}} />
		</div>
		<div class="button-wrapper">
			<Button text="Save" color={'orange'} sizeAlign={'outer'} onClick={() => {}} />
		</div>
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 28px;
		background-color: var(--background-primary);
		border-radius: 12px;
		padding: 16px;
		color: var(--black300);
		font-size: 20px;
	}

	.customer-info {
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 400;
	}

	.phone-num {
		display: flex;
		box-shadow: var(--shadow);
		padding: 10px 6px;
		border-radius: 16px;
		gap: 4px;
		align-items: end;
	}

	.reservation-info {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.date-info {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.guest-info {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.icon-wrapper {
		padding: 0 4px;
	}

	.table-info {
		display: flex;
		gap: 6px;
		font-size: 18px;
	}

	.table-info > p:nth-child(2) {
		color: var(--black400);
		font-size: 20px;
	}

	.note-info {
		display: flex;
		font-size: 18px;
		align-items: center;
		gap: 6px;
	}

	.button-container {
		display: flex;
		width: 100%;
		gap: 16px;
	}

	.button-container > * {
		flex: 1 1 0%;
	}

	.button-container > div:last-child {
		flex: 3 1 0%;
	}
</style>