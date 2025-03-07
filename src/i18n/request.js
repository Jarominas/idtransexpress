import { createNavigation } from 'next-intl/navigation'
import { defaultLocale, locales } from './config'
import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const { Link, redirect, usePathname, useRouter } = createNavigation({
    locales,
})

export async function getMessages(locale) {
    try {
        return (await import(`../messages/${locale}.json`)).default
    } catch (error) {
        console.error(`Could not load messages for locale: ${locale}`, error)
        return {}
    }
}

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale

    if (!locales.includes(locale)) notFound()

    return {
        locale: locale,
        messages: await getMessages(locale),
    }
})
