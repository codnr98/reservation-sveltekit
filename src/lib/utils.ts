import type { Action } from 'svelte/action';

export const formatAMPM = (hours: number, minutes: number) => {
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? 0 + minutes : minutes;
	const strTime = `${hours}:${minutes} ${ampm}`;
	return strTime;
};

export const translator = (dateObject: Date) => {
	const today = new Date();

	const month = dateObject.toLocaleString('en', { month: 'long' });
	const date = dateObject.getDate();
	const hour = dateObject.getHours();
	const minute = dateObject.getMinutes();

	let monthDate = `${month} ${date}`;

	if (today.toString == dateObject.toString) monthDate = 'Today';

	return `${monthDate}, ${formatAMPM(hour, minute)}`;
};

export const clickOutside: Action<HTMLElement, () => void> = (element, callbackFunction) => {
	const onClick = (event: MouseEvent) => {
		if (!element.contains(event.target as Node)) {
			callbackFunction();
		}
	};

	document.body.addEventListener('click', onClick);

	return {
		update(newCallbackFunction) {
			callbackFunction = newCallbackFunction;
		},

		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	};
};
