import { setLocale } from "./locale.helper";


export function formatDate(date: string, router: any): string {
	let year = date.slice(0, 4);
	let month = +date.slice(5, 7) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	let day = date.slice(8, 10);
	let firstNumberOfDay = day.slice(0, 1);
	let secondNumberOfDay = day.slice(1, 2);

	let dayNew;

	(firstNumberOfDay === '0') ? dayNew = secondNumberOfDay : dayNew = day;

	return dayNew + ' ' + setLocale(router.locale).months[month] + ' ' + year + ' г.';
}