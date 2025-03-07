'use client'
import React from 'react'
import { languages } from '@/i18n/config'
import { usePathname, useRouter } from '@/i18n/request'

const I18nContext = React.createContext()

export const I18nProvider = ({ children, locale, messages }) => {
    const router = useRouter()
    const pathname = usePathname()
    const currentLang = languages.find((lang) => lang.value === locale)

    const changeLocale = async (newLocale) => {
        try {
            await router.replace(pathname, { locale: newLocale })
        } catch (error) {
            console.error('Failed to change locale:', error)
        }
    }

    const t = (key) => {
        const parts = key.split('.')

        let result = messages
        for (const part of parts) {
            if (!result || !result[part]) {
                return key
            }
            result = result[part]
        }

        return result
    }
    return (
        <I18nContext.Provider value={{ locale, messages, t, changeLocale, currentLang }}>
            {children}
        </I18nContext.Provider>
    )
}

export const useI18n = () => React.useContext(I18nContext)
