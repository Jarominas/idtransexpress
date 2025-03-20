'use client'

import React from 'react'
import { useI18n } from '@/context/I18nContext'
import { languages } from '@/i18n/config'

const LangDropdown = () => {
    const { locale, currentLang, changeLocale } = useI18n()
    const [langMenuOpen, setLangMenuOpen] = React.useState(false)
    const langRef = React.useRef(null)

    const toggleLangMenu = () => {
        setLangMenuOpen(!langMenuOpen)
    }

    const handleChangeLocale = (newLocale) => {
        changeLocale(newLocale)
        setLangMenuOpen(false)
    }
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setLangMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [langRef])

    return (
        <div className='relative hidden sm:block' ref={langRef}>
            <button
                onClick={toggleLangMenu}
                className='flex items-center text-gray-300 hover:bg-primary-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none'
            >
                <img src={currentLang?.src} alt={currentLang?.label} className='h-4 w-6 mr-1' />
                {currentLang?.label}
                <svg
                    className='ml-1 h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                    />
                </svg>
            </button>
            <div
                className={`${
                    langMenuOpen ? 'block' : 'hidden'
                } absolute right-0 mt-2 py-1 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
            >
                {languages.map((lang) => (
                    <button
                        key={lang.value}
                        className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                            locale === lang.value
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => {
                            handleChangeLocale(lang.value)
                        }}
                    >
                        <img src={lang.src} alt={lang.label} className='h-4 w-6 mr-2' />
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default LangDropdown
