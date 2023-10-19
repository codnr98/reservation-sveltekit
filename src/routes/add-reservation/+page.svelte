<script>
	import Button from '../../components/Button.svelte';
	import DorpDownIcon from '../../assets/arrow_drop_down.svelte';

	const handleClickSelectDateButton = () => {};
</script>

<form>
	<div class="first">
		<input placeholder="name" />
		<input placeholder="phone" />
		<div class="button-wrapper">
			<Button
				sizeAlign={'outer'}
				icon={'calendar'}
				text={'Select Date'}
				onClick={handleClickSelectDateButton}
			/>
		</div>
	</div>
	<div class="second">
		<div class="counter-container">
			<p class="title">Guests</p>
			<div class="counter">
				<Button text={''} icon={'minus'} sizeAlign={'inner'} onClick={() => {}} />
				<p class="count">0</p>
				<Button text={''} icon={'plus'} sizeAlign={'inner'} onClick={() => {}} />
			</div>
		</div>

		<div class="select-wrapper">
			<select>
				<option>Select Table</option>
				<option>option1</option>
				<option>option2</option>
				<option>option3</option>
			</select>
			<div class="icon-wrapper"><DorpDownIcon /></div>
		</div>
	</div>
</form>

<style>
	form {
		padding: 12px 26px;
	}

	input {
		border: 1px solid var(--line-normal);
		padding: 22px 22px;
		border-radius: 12px;
	}

	.first {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		gap: 20px;
	}

	.first > * {
		width: 100%;
	}

	.button-wrapper {
		height: 90%;
	}

	.second {
		display: flex;
		justify-content: space-between;
		padding: 40px 0px;
	}

	.counter-container {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.counter {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		gap: 5px;
	}

	.count {
		text-align: center;
		font-size: 24px;
	}

	.select-wrapper {
		border: solid 1px var(--line-normal);
		border-radius: 12px;
		width: 55%;
		position: relative;
	}

	.title {
		color: var(--black300);
	}

	select {
		-o-appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: none;
		padding: 22px 22px;
		color: var(--line-normal);
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0);
	}

	.icon-wrapper {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translate(0%, -50%);
	}
</style>
