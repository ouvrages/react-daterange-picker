import { DefinedRange } from "./types";

import {
	addDays,
	startOfWeek,
	endOfWeek,
	addWeeks,
	startOfMonth,
	endOfMonth,
	addMonths
} from "date-fns";

import locales from "./locales";

const getDefaultRanges = (date: Date, locale: string): DefinedRange[] => [
	{
		label: locales[locale]["today"],
		startDate: date,
		endDate: date
	},
	{
		label: locales[locale]["yesterday"],
		startDate: addDays(date, -1),
		endDate: addDays(date, -1)
	},
	{
		label: locales[locale]["this_week"],
		startDate: startOfWeek(date),
		endDate: endOfWeek(date)
	},
	{
		label: locales[locale]["last_week"],
		startDate: startOfWeek(addWeeks(date, -1)),
		endDate: endOfWeek(addWeeks(date, -1))
	},
	{
		label: locales[locale]["last_7_days"],
		startDate: addWeeks(date, -1),
		endDate: date
	},
	{
		label: locales[locale]["this_month"],
		startDate: startOfMonth(date),
		endDate: endOfMonth(date)
	},
	{
		label: locales[locale]["last_month"],
		startDate: startOfMonth(addMonths(date, -1)),
		endDate: endOfMonth(addMonths(date, -1))
	}
];

export const defaultRanges = (locale: string): DefinedRange[] => getDefaultRanges(new Date(), locale);

export const defaultLocale = "en"
