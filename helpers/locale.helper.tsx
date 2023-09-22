import { en } from "locales/en.locale";
import { ru } from "locales/ru.locale";
import { ge } from "locales/ge.locale";

type localeType = typeof en | typeof ru | typeof ge;

export function setLocale(locale: string | undefined): localeType {
	switch (locale) {
		case 'ru':
			return ru;
		case 'ge':
			return ge;
		default:
			return en;
	}
}