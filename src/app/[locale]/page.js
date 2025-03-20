import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Prices from '@/components/prices/Prices'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Prices />
            <Contact />
            <Footer />
        </main>
    )
}
