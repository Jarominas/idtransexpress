import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { getMessages } from '@/i18n/request'
import { Providers } from '@/providers/Providers'
import { Outfit } from 'next/font/google'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})
const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function LocaleLayout({ children, params }) {
    const resolvedParams = await params
    const { locale } = resolvedParams
    const messages = await getMessages(locale)
    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${outfit.variable} antialiased`}>
                <Providers messages={messages} locale={locale}>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
