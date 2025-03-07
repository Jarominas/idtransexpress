// import { useI18n } from '@/context/I18nContext'
import { languages } from '@/i18n/config'

const MobileNavItems = ({ isOpen, setIsOpen }) => {
    // const { t, changeLocale } = useI18n()

    const scrollToSection = (sectionId) => (e) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    const handleChangeLocale = (locale) => {
        changeLocale(locale)
        setIsOpen(false)
    }

    return (
        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
            <div className='px-2 pt-2 pb-3 space-y-1'>
                <a
                    href='#about'
                    onClick={scrollToSection('about')}
                    className='text-primary-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                    {/* {t('nav.about')} */}
                </a>
                <a
                    href='#prices'
                    onClick={scrollToSection('prices')}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                    {/* {t('nav.price')} */}
                </a>
                <a
                    href='#contact'
                    onClick={scrollToSection('contact')}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                    {/* {t('nav.contact')} */}
                </a>

                <div className='pt-2'>
                    {languages.map((lang) => (
                        <button
                            key={lang.value}
                            onClick={() => handleChangeLocale(lang.value)}
                            className='flex items-center text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium'
                        >
                            <img src={lang.src} alt={lang.label} className='h-4 w-6 mr-2' />
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileNavItems
