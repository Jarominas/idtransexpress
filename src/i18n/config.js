export const locales = ['et', 'ru']
export const defaultLocale = 'et'

export const languages = [
    {
        label: 'EST',
        value: 'et',
        src: '/et.png',
    },
    {
        label: 'RUS',
        value: 'ru',
        src: '/ru.png',
    },
]

// Use the locale in various context situations
export function getTranslations(locale) {
    return import(`../messages/${locale}.json`)
        .then((module) => module.default)
        .catch(() => ({}))
}
