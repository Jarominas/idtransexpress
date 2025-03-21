'use client'

import { I18nProvider } from '@/context/I18nContext'
import { SessionProvider } from 'next-auth/react'
import { NextIntlClientProvider } from 'next-intl'

export function Providers({ children, messages, locale }) {
    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <I18nProvider locale={locale} messages={messages}>
                <SessionProvider>{children}</SessionProvider>
            </I18nProvider>
        </NextIntlClientProvider>
    )
}
