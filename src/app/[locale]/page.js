import About from '@/components/about/About'
import Header from '@/components/header/Header'
import Prices from '@/components/prices/Prices'
import { NextIntlClientProvider } from 'next-intl'

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Prices />
        </main>
    )
}
