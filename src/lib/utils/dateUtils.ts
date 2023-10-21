export const formatAMPM = (hours: number, minutes: number) => {
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? 0 + minutes : minutes;
	const strTime = `${hours}:${minutes} ${ampm}`;
	return strTime;
};

export const translator = (dateObject: Date, dataType: 'string' | 'value') => {
	const today = new Date();
	let month: number | string = '';
	const date = dateObject.getDate();
	const hour = dateObject.getHours();
	const minute = dateObject.getMinutes();

	let monthDate = `${month} ${date}`;

	if (dataType === 'string') {
		month = dateObject.toLocaleString('en', { month: 'long' });
		if (today.getDate() == date && today.getMonth() == dateObject.getMonth()) monthDate = 'Today';
		return `${monthDate}, ${formatAMPM(hour, minute)}`;
	}

	if (dataType === 'value') {
		month = dateObject.getMonth() + 1;
		return {
			month: month,
			date: date,
			hour: hour,
			minute: minute
		};
	}
};

export const padZero = (num: number) => num.toString().padStart(2, '0');

export const dayOfMonth = (month: number) => {
	const currentYear = new Date().getFullYear();
	const thirtyMonth = [4, 6, 9, 11];
	const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

	if (month === 2) return isLeapYear(currentYear) ? 29 : 28;

	return thirtyMonth.includes(month) ? 30 : 31;
};

export const getMonthName = (monthNumber: number) => {
	const date = new Date();
	date.setMonth(monthNumber - 1);

	return date.toLocaleString('en-US', { month: 'long' });
};
