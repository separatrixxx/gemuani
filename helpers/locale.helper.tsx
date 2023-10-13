import { en } from "locales/en.locale";
import { ru } from "locales/ru.locale";
import { ka } from "locales/ka.locale";

type localeType = typeof en | typeof ru | typeof ka;

export function setLocale(locale: string | undefined): localeType {
	switch (locale) {
		case 'ru':
			return ru;
		case 'ka':
			return ka;
		default:
			return en;
	}
}