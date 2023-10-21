import type { Action } from 'svelte/action';

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
