import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
	// A list of all locales that are supported
	locales,
	localePrefix,
	// Used when no locale matches
	defaultLocale: 'en',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(fr|es|en)/:path*'],
};
